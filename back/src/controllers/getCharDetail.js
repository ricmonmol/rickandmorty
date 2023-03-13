const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { detailId } = req.params;
  axios(URL + detailId)
    .then((response) => response.data)
    .then((data) => {
      const char = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
      };
      res.status(200).json(char);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = {
  getCharDetail,
};
