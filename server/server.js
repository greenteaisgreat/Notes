import express from "express";
import notesRouter from "./routes/notesRoutes.js";

const app = express();
const port = 5001;

app.use("/api/notes", notesRouter);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
