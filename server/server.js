// TODO: set up server API

// imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// initialise express
// ! Remind myself what this does - what is express?
const app = express();

// use JSON in the server
// ! Remind myself why?
app.use(express.json());

// config cors
// ! I know vaguely what cors does - if we don't do this there is an error but I need to remember why?
app.use(cors());

// set up a port for server to run on
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server API is running on port ${PORT}`);
});

// ========================

// TODO: set up a routing system with at least one GET route and one POST route

// ROOT ROUTE - GET - READ DATA
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the server API for that cat app - GET comfy",
  });
});

// remember to store your secrets in .env file
