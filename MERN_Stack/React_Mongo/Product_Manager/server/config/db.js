const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri = `mongodb+srv://azizissa_db_user:aziz.issa.12.14@cluster0.kj0cq31.mongodb.net/?appName=Cluster0`;

    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

