const router = require("express").Router();
const { createNote, deleteNote, updateNote, getAllNotes, getNoteByID } = require("../controllers/noteControllers");


router.get("/", getAllNotes);
router.get("/:id", getNoteByID);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);


module.exports = router;