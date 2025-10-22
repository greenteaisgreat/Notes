import express from "express";

const app = express();
const port = 5001;

app.get("/api/notes", (req, res) => {
  res.status(200).send("You got five notes!");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note successfully created" });
});

app.put("/api/notes:id", (req, res) => {
  res.status(200).json({ message: "Note successfully updated" });
});

app.delete("/api/notes:id", (req, res) => {
  res.status(200).json({ message: "Note successfully deleted" });
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
