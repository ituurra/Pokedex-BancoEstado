var axios = require("axios");

export const listPokemon = async (req, res) => {
  try {
    let pokemonsList = [];
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=150"
    );
    response.data?.results.forEach((p) => {
      let pokemon = {
        name: p?.name || "",
        url: p?.url || "",
      };
      pokemonsList.push(pokemon);
    });

    return res.status(200).json(pokemonsList);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const abilitiesPokemon = async (req, res) => {
  try {
    let pokemonAbilities = [];
    const name = req.params.name;
    const url = "https://pokeapi.co/api/v2/pokemon/" + name.toString();
    console.log(url);
    const response = await axios.get(url);
    response.data?.abilities.forEach((p) => {
      let abilities = {
        name: p?.ability.name || "",
        oculto: p?.is_hidden || false,
        slot: p?.slot,
      };
      pokemonAbilities.push(abilities);
    });

    return res.status(200).json(pokemonAbilities);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
