const Note = require("../models/Note")

//* Get All Notes..
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        if(!notes) return res.status(404).json({ message: "Failed to fetch Notes..!" });

        res.status(200).json(notes);
    } catch (err) {
        console.error("Error in getAllNotes Controller..!");
        res.status(500).json({ message: "Internal Server Error..!" });
    }
}

//* Create Note..
const createNote = () => {}

//* Update Note..
const updateNote = () => {}

//* Delete Note..
const deleteNote = () => {}


module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
}

