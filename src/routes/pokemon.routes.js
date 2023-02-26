import { Router } from "express";
const router = Router();

import * as pokemonController from '../controllers/pokemon.controller'

router.get('/pokemon',pokemonController.listPokemon);
router.post('/pokemon/abilities/:name',pokemonController.abilitiesPokemon);

export default router;