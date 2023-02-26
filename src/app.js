import pokemonRoutes from './routes/pokemon.routes';

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("port", 3000);


app.use("/", pokemonRoutes);

export default app;