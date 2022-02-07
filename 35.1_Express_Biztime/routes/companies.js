// Routes for Biztime Companies

const express = require('express');
const ExpressError = require('../expressError');
const slugify = require('slugify');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(
      `SELECT code, name, description FROM companies`
    );
    return res.json({ companies: results.rows });
  } catch (e) {
    return next(e);
  }
});

router.get('/:code', async (req, res, next) => {
  try {
    const { code } = req.params
    const company = await db.query(
      `SELECT companies.code, companies.name, industries.industry, companies.description 
      FROM companies 
      LEFT JOIN companies_industries 
      AS ci 
      ON companies.code = ci.company_code 
      LEFT JOIN industries ON ci.industry_code = industries.code 
      WHERE companies.code = $1`,
      [code]
    );
    if (!company.rows[0]) {
      throw new ExpressError(
        `Cannot find company under code of ${code}`,
        404
      );
    }
    const { comp_code, name, description } = company.rows[0];
    // map to get mulitple industry codes
    const industries = company.rows.map((row) => row.industry);
    const companyResults = { comp_code, name, industries, description };
    const invoiceResults = await db.query(
      'SELECT id, comp_code, amt, paid, add_date, paid_date FROM invoices WHERE comp_code = $1',
      [code]
    );
    company.invoices = invoiceResults.rows;
    return res.json({
      company: companyResults,
    });
  } catch (e) {
    return next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const code = slugify(name, { lower: true, remove: /[*+~.()'"!:@]/g });
    if (!code || !name || !description)
      throw new ExpressError(
        'Request must have Code, Name, and Description',
        422
      );
    const results = await db.query(
      'INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description',
      [code, name, description]
    );
    return res.status(201).json({ company: results.rows[0] });
  } catch (e) {
    return next(e);
  }
});

router.put('/:code', async (req, res, next) => {
  try {
    const { code } = req.params;
    const { name, description } = req.body;
    if (!name || !description)
      throw new ExpressError('Request must have Name and Description', 422);
    const results = await db.query(
      'UPDATE companies SET name=$1, description=$2 WHERE code=$3 RETURNING code, name, description',
      [name, description, code]
    );
    if (!results.rows[0]) {
      throw new ExpressError(`Cannot find company under code of ${code}`, 404);
    }
    return res.send({ company: results.rows[0] });
  } catch (e) {
    return next(e);
  }
});

router.delete('/:code', async (req, res, next) => {
  try {
    const { code } = req.params;
    if (!code) {
      throw new ExpressError('Invalid Request', 422);
    }
    const results = await db.query('DELETE FROM companies WHERE code=$1',
    [code]
    );
    if (results.rowCount === 0)
      throw new ExpressError('Invalid Company Code', 404);
    return res.send({ status: 'deleted' });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;