// Create web server and set up routes for comments

var express = require('express');
var router = express.Router();
var db = require('./db');

// Get all comments
router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM comments";
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Get a specific comment
router.get('/:id', function(req, res, next) {
  var sql = "SELECT * FROM comments WHERE id = " + req.params.id;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Create a new comment
router.post('/', function(req, res, next) {
  var sql = "INSERT INTO comments (comment) VALUES ('" + req.body.comment + "')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Update a comment
router.put('/:id', function(req, res, next) {
  var sql = "UPDATE comments SET comment = '" + req.body.comment + "' WHERE id = " + req.params.id;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Delete a comment
router.delete('/:id', function(req, res, next) {
  var sql = "DELETE FROM comments WHERE id = " + req.params.id;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;