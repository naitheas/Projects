const db = require('../db');
const express = require('express');
const router = express.Router();
const ExpressError = require('../expressError');




// GET /companies
// Returns list of companies, like {companies: [{code, name}, ...]}
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


// GET /companies/[code]
// Return obj of company: {company: {code, name, description}}
// If the company given cannot be found, this should return a 404 status response.
router.get('/:code', async (req, res, next) => {
    const { code } = req.params;
    try {
      const company = await db.query(
        `SELECT code, name, description FROM companies WHERE code=$1`,
        [code]
      );
      const invoices = await db.query(
        'SELECT id, comp_code, amt, paid, add_date, paid_date FROM invoices WHERE comp_code = $1',
        [code]
      );
  
      if (!company.rows[0]) {
        throw new ExpressError(`Cannot find company under code of ${code}`, 404);
      }
      const { name, description } = company.rows[0];
      return res.json({
        company: { code, name, description, invoices: invoices.rows },
      });
    } catch (e) {
      return next(e);
    }
  });
// POST /companies
// Adds a company.
// Needs to be given JSON like: {code, name, description}
// Returns obj of new company: {company: {code, name, description}}
router.post('/', async (req, res, next) => {
    try {
      const { code, name, description } = req.body;
      if (!code || !name || !description)
    //   send 422 cannot process error
        throw new ExpressError(
          'Request must have Code, Name, and Description',
          422
        );
      const results = await db.query(
        'INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description',
        [code, name, description]
      );
    //   send 201 creation status
      return res.status(201).json({ company: results.rows[0] });
    } catch (e) {
      return next(e);
    }
  });
// PUT /companies/[code]
// Edit existing company.
// Should return 404 if company cannot be found.
// Needs to be given JSON like: {name, description}
// Returns update company object: {company: {code, name, description}}
router.put('/:code', async (req, res, next) => {
    try {
      const { code } = req.params;
      const { name, description } = req.body;
      if (!name || !description)
         //   send 422 cannot process error
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

// DELETE /companies/[code]
// Deletes company.
// Should return 404 if company cannot be found.
// Returns {status: "deleted"}
router.delete('/:code', async (req, res, next) => {
    try {
      const { code } = req.params;
      if (!code) {
             //   send 422 cannot process error
        throw new ExpressError('Invalid Request', 422);
      }
      const results = await db.query('DELETE FROM companies WHERE code=$1', [
        code,
      ]);
      if (results.rowCount === 0)
        throw new ExpressError('Invalid Company Code', 404);
      return res.send({ status: 'deleted' });
    } catch (e) {
      return next(e);
    }
  });

module.exports = router;