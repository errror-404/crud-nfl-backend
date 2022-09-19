const express = require("express");
const router = express.Router();
const oMyBDConnection = require("../database");

router.get("/get-jugadores", (req, res) => {
  const query = `SELECT * FROM jugadores`;
  oMyBDConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post("/post-jugadores", (req, res) => {
  const {
    nombre,
    apellidos,
    edad,
    posicion,
    equipo,
    nacionalidad,
    superBowls,
  } = req.body;

  console.log(req.body);

  const query = `
            CALL insertJugador(?,?,?,?,?,?,?);
        `;
  oMyBDConnection.query(
    query,
    [nombre, apellidos, edad, posicion, equipo, nacionalidad, superBowls],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.put("/put-jugadores", (req, res) => {
  const {
    id,
    nombre,
    apellidos,
    edad,
    posicion,
    equipo,
    nacionalidad,
    superBowls,
  } = req.body;
  const query = `UPDATE jugadores SET nombre = ?, apellidos = ?, edad = ?, posicion = ?, equipo = ?, nacionalidad = ?, superBowls = ? WHERE id = ?`;
  oMyBDConnection.query(
    query,
    [nombre, apellidos, edad, posicion, equipo, nacionalidad, superBowls, id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/delete-jugadores", (req, res) => {
  const { id } = req.body;
  const query = `DELETE FROM jugadores WHERE id = ?`;
  oMyBDConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
