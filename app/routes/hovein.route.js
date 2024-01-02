// module.exports = app => {
//     const hovein = require("../controller/hovein.controller")
//     const r = require("express").Router();

//     r.get("/", hovein.findAll);
//     r.get("/:id", hovein.show);
//     r.post("/", hovein.create);
//     r.put("/:id", hovein.update);
//     r.delete("/:id", hovein.delete);


//     app.use("/hovein", r);
// }

import express from "express";
import hoveinController from "../controller/hovein.controller.js";


const Router = new express.Router();
Router.get("/", (req, res) => {
    res.send("Hovein")
})
Router.post("/hovein", hoveinController.create);
Router.get("/hovein", hoveinController.findAll);
Router.get("/hovein/:id", hoveinController.show);
Router.put("/hovein/:id", hoveinController.update);
Router.delete("/hovein/:id", hoveinController.deleteData);

export default Router