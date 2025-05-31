const Note = require("../models/Note")

//* Get All Notes..
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
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

        if (!newNote) {
            return res.status(500).json({ message: "Failed to add note." });
        }

        res.status(201).json({ message: "Note created successfully.", note: newNote });
    } catch (err) {
        console.error("Error in createNote Controller:", err);
        res.status(500).json({ message: "Internal server error." });
    }
};


//* Update Note..
const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        const updatedNote = await Note.findByIdAndUpdate( id , { title, content }, { new: true });
        if(!updatedNote) return res.status(404).json({ message: "Failed to update the Note..!" });

        res.status(200).json({ message: "Note updated Successfully.." });
    } catch (err) {
        console.error("Error in updateNote Controller..!");
        res.status(500).json({ message: "Internal Server Error..!" });
    }
}

//* Delete Note..
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if(!deletedNote) return res.status(404).json({ message: "Note Not Found..!" });

        res.status(200).json({ message: "Note Deleted Successfully"})
    } catch (err) {
        console.error("Error in deleteNote Controller..!");
        res.status(500).json({ message: "Internal Server Error..!" });
    }
}

//* Get Note By ID
const getNoteByID = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if(!note) return res.status(404).json({ message: "Note Not Found..!" });

        res.status(200).json(note);
    } catch (err) {
        console.error("Error in getNoteByID Controller..!");
        res.status(500).json({ message: "Internal Server Error..!" });
    }
}


module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    getNoteByID
}

