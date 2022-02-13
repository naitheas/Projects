const express = require("express");
const Book = require("../models/book");
const ExpressError = require('../expressError');
const jsonschema = require("jsonschema");
const newBookSchema = ('../schemas/bookSchema.json');
const updateBookSchema = ('../schemas/bookSchemaUpdate.json');
const router = new express.Router();


/** GET / => {books: [book, ...]}  */

router.get("/", async function (req, res, next) {
  try {
    const books = await Book.findAll(req.query);
    return res.json({ books });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id]  => {book: book} */

router.get("/:isbn", async function (req, res, next) {
  try {
    const book = await Book.findOne(req.params.isbn);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
});

/** POST /   bookData => {book: newBook}  */

router.post("/", async function (req, res, next) {
  try{
    const verify = jsonschema.validate(req.body,newBookSchema);
    if(!verify.valid){
      let listOfErrors = verify.errors.map((err) => err.stack);
      let error = new ExpressError(listOfErrors, 400);
      return next(error);
      
      // const errorList = verify.errors.map(e=>e.stack);
      // return next(new ExpressError(errorList,400));
  }
    const newBook = await Book.create(req.body);
      return res.status(201).json({ newBook });
} catch(e){
  return next(e);
};
});

/** PUT /[isbn]   bookData => {book: updatedBook}  */

router.put("/:isbn", async function (req, res, next) {
  try {
    const verify = jsonschema.validate(req.body,bookSchemaUpdate);
    if(!verify.valid){
      let listOfErrors = verify.errors.map((err) => err.stack);
      let error = new ExpressError(listOfErrors, 400);
      return next(error);
      // const errorList = verify.errors.map(e=>e.stack);
      // return next(new ExpressError(errorList,400));
  }
    const book = await Book.update(req.params.isbn, req.body);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[isbn]   => {message: "Book deleted"} */

router.delete("/:isbn", async function (req, res, next) {
  try {
    await Book.remove(req.params.isbn);
    return res.json({ message: "Book deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
