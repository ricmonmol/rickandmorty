const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios(`${URL}/${id}`);
    const data = response.data;
    const char = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
    res.status(200).json(char);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCharById,
};
