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

// READ CATS DATA - GET
app.get("/cat-posts", async (req, res) => {
  try {
    // query the db - what will appear
    const query = await db.query(
      `SELECT
    username,
    date,
    location,
    approach_score,
    comments,
    src
    FROM cat_posts`
    );
    console.log(query.rows);
    res.json(query.rows);
  } catch (error) {
    console.error(error, "Response failed to GET cat posts");
    res.status(500).json({ request: "fail" });
  }
});

// check if this works in Postman - it does!

// CREATE CAT DATA - POST
app.post("/new-cat", async (req, res) => {
  try {
    // collect data to insert
    const { username, date, location, approach_score, comments, src } =
      req.body;
    // query database to insert data
    const query = await db.query(
      `INSERT INTO cat_posts
      (username, date, location, approach_score, comments, src)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [username, date, location, approach_score, comments, src]
    );
    res.status(200).json({ request: "success" });
    res.json(query.rows);
  } catch (error) {
    console.error(error, "response failed for POST /new-cat path");
    res.status(500).json({ request: "fail" });
  }
});

// Check this in POSTMAN - success!

// Create a route to DELETE and entry
app.delete("/delete-cat-post/:id", (req, res) => {
  try {
    // access the value of my id params
    const idParams = req.params.id;
    // query db
    const query = db.query(`DELETE FROM cat_posts WHERE id=$1 RETURNING *`, [
      idParams,
    ]);
    res.status(200).json({ request: "successful DELETE" });
  } catch (error) {
    console.error(error, "response failed for DELETE path");
    res.status(500).json({ request: "fail" });
  }
});

// tested in postman - all working!

// GET route to get data from a specific user
app.get("/cat-posts/user/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await db.query(
      `SELECT
      username,
      date,
      location,
      approach_score,
      comments,
      src
      FROM cat_posts
      WHERE username = $1`,
      [username]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Failed to get user posts:", error);
    res.status(500).json({ request: "fail" });
  }
});

// remember to store your secrets in .env file
