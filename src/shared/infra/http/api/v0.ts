
import express from "express";
import { recipeRouter } from "../../../../modules/recipe-generator/infra/http/routes";
import { memberRouter } from "../../../../modules/recipe-generator/infra/http/routes/member";

const v0Router = express.Router()

v0Router.get('/', (req, res) => {
    return res.json({ message: "Yo! we're up" });
})

v0Router.use('/recipes', recipeRouter);
v0Router.use('/member', memberRouter);

export { v0Router }
