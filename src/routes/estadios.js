const express = require("express");
const router = express.Router();
const oMyBDConnection = require("../database");

router.get("/get-estadios", (req, res) => {
  const query = `SELECT * FROM estadios`;
  oMyBDConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post("/post-estadios", (req, res) => {
  const { nombre, equipo, localidad, capacidad, apertura } = req.body;
  const query = `INSERT INTO estadios (nombre, equipo, localidad, capacidad, apertura) VALUES (?,?,?,?,?)`;
  oMyBDConnection.query(
    query,
    [nombre, equipo, localidad, capacidad, apertura],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.put("/put-estadios", (req, res) => {
  const { id, nombre, equipo, localidad, capacidad, apertura } = req.body;
  const query = `UPDATE estadios SET nombre = ?, equipo = ?, localidad = ?, capacidad = ?, apertura = ? WHERE id = ?`;
  oMyBDConnection.query(
    query,
    [nombre, equipo, localidad, capacidad, apertura, id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/delete-estadios:id", (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM estadios WHERE id = ?`;
  oMyBDConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});
module.exports = router;

