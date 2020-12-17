import express from 'express';

const recipeRouter = express.Router();

recipeRouter.get('/', (req, res) => {
  res.send('Hey PEASANT!');
});

export { recipeRouter };
