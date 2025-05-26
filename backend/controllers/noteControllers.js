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
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = await Note.create({ title, content });

        if(!newNote) return res.status(401).json({ message: "Failed to add note..!" });

        res.status(201).json({ message: "Note Created Successfuly.." });
    } catch (err) {
        console.error("Error in createNote Controller..!");
        res.status(500).json({ message: "Internal Server Error..!" });
    }
}

//* Update Note..
const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        const updatedNote = await Note.findByIdAndUpdate( id , { title, content }, { new: true });
        if(!updatedNote) return res.status(404).json({ message: "Failed to update the Note..!" });

        res.status(200).json({ message: "Note updated Successfuly.." });
    } catch (err) {
        console.error("Error in updateNote Controller..!");
        res.status(500).json({ message: "Internal Server Error..!" });
    }
}

//* Delete Note..
const deleteNote = () => {}


module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
}

