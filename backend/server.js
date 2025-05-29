require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const notesRoutes = require("./routes/noteRoutes");
const rateLimiter = require("./middlewares/rateLimiter");
const cors = require("cors");

const app = express();


//* Middlewares

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    withCredentials: true, // Allow cookies to be sent with requests
}))

app.use(rateLimiter);


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
