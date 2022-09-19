const express = require("express");
const router = express.Router();
const oMyBDConnection = require("../database");

router.get("/get-equipos", (req, res) => {
  const query = `SELECT * FROM equipos`;
  oMyBDConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post("/post-equipos", (req, res) => {
  const { nombre, estadio, campeonatos, liga, division } = req.body;
  const query = `INSERT INTO equipos (nombre, estadio, campeonatos, liga,division) VALUES (?,?,?,?,?)`;
  oMyBDConnection.query(
    query,
    [nombre, estadio, campeonatos, liga, division],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.put("/put-equipos", (req, res) => {
  const { id, nombre, estadio, campeonatos, liga, division } = req.body;
  const query = `UPDATE equipos SET nombre = ?, estadio = ?, campeonatos = ?, liga = ?, division = ? WHERE id = ?`;
  oMyBDConnection.query(
    query,
    [nombre, estadio, campeonatos, liga, division, id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/delete-equipos", (req, res) => {
  const { id } = req.body;
  const query = `DELETE FROM equipos WHERE id = ?`;
  oMyBDConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
