const db = require('../db');
const express = require('express');
const router = express.Router();
const ExpressError = require('../expressError');


// GET /invoices
// Return info on invoices: like {invoices: [{id, comp_code}, ...]}
router.get('/', async (req, res, next) => {
    try {
      const results = await db.query(
        `SELECT id, comp_code, amt, paid, add_date, paid_date FROM invoices`
      );
      return res.json({ invoices: results.rows });
    } catch (e) {
      return next(e);
    }
  });

// GET /invoices/[id]
// Returns obj on given invoice.
// If invoice cannot be found, returns 404.
// Returns {invoice: {id, amt, paid, add_date, paid_date, company: {code, name, description}}}
router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const results = await db.query(
        `SELECT id, comp_code, amt, paid, add_date, paid_date FROM invoices WHERE id=$1`,
        [id]
      );
      if (!results.rows[0]) {
        throw new ExpressError(`Cannot find invoice under id of ${id}`, 404);
      }
      const { comp_code, amt, paid, add_date, paid_date } = results.rows[0];
      const company = await db.query(
        `SELECT code, name, description FROM companies WHERE code=$1`,
        [comp_code]
      );
      return res.json({
        invoices: {
          id: amt,
          paid,
          add_date,
          paid_date,
          company: company.rows[0],
        },
      });
    } catch (e) {
      return next(e);
    }
  });

// POST /invoices
// Adds an invoice.
// Needs to be passed in JSON body of: {comp_code, amt}
// Returns: {invoice: {id, comp_code, amt, paid, add_date, paid_date}}
router.post('/', async (req, res, next) => {
    try {
      const { comp_code, amt } = req.body;
      const add_date = new Date();
      if (!comp_code || !amt) {
             //   send 422 cannot process error
        throw new ExpressError('Invalid Request', 422);
      }
      const results = await db.query(
        'INSERT INTO invoices (comp_code, amt, paid, add_date, paid_date) VALUES ($1, $2, $3, $4, $5) RETURNING id, comp_code, amt, paid, add_date, paid_date',
        [comp_code, amt, false, add_date, null]
      );
    //   send 201 creation status
      return res.status(201).json({ invoice: results.rows[0] });
    } catch (e) {
      return next(e);
    }
  });
// PUT /invoices/[id]
// Updates an invoice.
// If invoice cannot be found, returns a 404.
// Needs to be passed in a JSON body of {amt}
// Returns: {invoice: {id, comp_code, amt, paid, add_date, paid_date}}
router.put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { amt, paid } = req.body;
      if (!amt || (paid !== true && paid !== false)) {
        throw new ExpressError('Invalid Request', 422);
      }
      let paid_date = (paid)
      ? paid_date = new Date()
      : paid_date = null;

      const results = await db.query(
        'UPDATE invoices SET amt=$1, paid=$2, paid_date=$3 WHERE id=$4 RETURNING id, comp_code, amt, paid, add_date, paid_date',
        [amt, paid, paid_date, id]
      );
      if (!results.rows[0]) {
        throw new ExpressError(`Invalid ${id}`, 404);
      }
      return res.json({ invoice: results.rows[0] });
    } catch (e) {
      return next(e);
    }
  });
// DELETE /invoices/[id]
// Deletes an invoice.
// If invoice cannot be found, returns a 404.
// Returns: {status: "deleted"}
router.delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
         //   send 422 cannot process error
      if (!id) {
        throw new ExpressError('Invalid Request', 422);
      }
      const results = await db.query('DELETE FROM invoices WHERE id=$1', [id]);
      if (results.rowCount === 0)
        throw new ExpressError('Invalid Company Id', 404);
      return res.send({ status: 'deleted' });
    } catch (e) {
      return next(e);
    }
  });


module.exports = router;