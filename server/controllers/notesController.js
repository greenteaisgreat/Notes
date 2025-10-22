export async function getAllNotes(req, res) {
  res.status(200).send("Notes retrieved successfully");
}

export async function postNote(req, res) {
  res.status(201).json({ message: "Note posted successfully" });
}

export async function updateNote(req, res) {
  res.status(200).json({ message: "Note updated successfully" });
}

export async function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully" });
}
