const router = require("express").Router();
const { createNote, deleteNote, updateNote, getAllNotes } = require("../controllers/noteControllers");


router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);


module.exports = router;