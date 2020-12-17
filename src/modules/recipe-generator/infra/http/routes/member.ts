import express from "express";
import { saveRecipesController } from "../../../usecases/save-recipes";

const memberRouter = express.Router()

memberRouter.post('/recipe', (req, res) => saveRecipesController.execute(req, res))


export {
    memberRouter
}