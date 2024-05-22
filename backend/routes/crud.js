import express from "express";
import * as db from "../db/index.js";

const crudRouter = express.Router();

// fetching all notes.
crudRouter.get("/", async (req, res) => {
    try {
        const queryString = "SELECT * FROM notes";
        const result = await db.query(queryString);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Database error" });
    }
});

// adding a note.
crudRouter.post("/add", async (req, res) => {
    const { title, content } = req.body;
    try {
        const queryString = `INSERT INTO notes (title, content) VALUES ($1, $2)`;
        const values = [title, content];
        const result = await db.query(queryString, values);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error: Unable to edit." });
    }
});

// deleting a note.
crudRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const queryString = `DELETE FROM notes WHERE id=$1`;
        const values = [id];
        const result = await db.query(queryString, values);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error: Unable to delete." });
    }
});

// updating a note
crudRouter.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { newTitle, newContent } = req.body;
    try {
        const queryString = `UPDATE notes SET title=$1, content=$2 WHERE id=$3`;
        const values = [newTitle, newContent, id];
        const result = await db.query(queryString, values);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error: Unable to edit." });
    }
});

export default crudRouter;
