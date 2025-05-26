const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected Successfully..");
    } catch (err) {
        console.log("Failed to Connect DB..!", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;