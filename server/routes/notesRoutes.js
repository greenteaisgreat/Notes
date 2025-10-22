import express from "express";
import {
  getAllNotes,
  postNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const notesRouter = express.Router();

notesRouter.get("/", getAllNotes);

notesRouter.post("/", postNote);

notesRouter.put("/:id", updateNote);

notesRouter.delete("/:id", deleteNote);

export default notesRouter;
