const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs");

router.get("/onsearch/:id", getCharById);

router.get("/detail/:detailid", getCharDetail);

router.get("/fav", (req, res) => {
  res.status(200).json(favs);
});

router.post("/fav", (req, res) => {
  const { id, name, species, image, gender } = req.body;
  const character = {
    id,
    name,
    species,
    image,
    gender,
  };
  favs.push(character);
  res.status(200).json(favs);
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id !== Number(id));
  res.status(200).send("Se elimino el personaje");
});

module.exports = router;
