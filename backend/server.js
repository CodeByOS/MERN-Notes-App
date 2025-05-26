require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const notesRoutes = require("./routes/noteRoutes");

const app = express();


//* Middlewares

app.use(express.json())

//* Define Routes

// app.get("/", (req, res) => {
//     res.send("✅ API is running...");
// });

app.use("/api/notes", notesRoutes);

//* Connect DB then start the server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        })
    })
    .catch(err => console.log("Failed to run server..!", err));
