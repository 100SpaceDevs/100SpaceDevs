const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // CREATE .ENV with PORT and DB_STRING including your database and password
    // copy and paste into .env
    const conn = await mongoose.connect(process.env.DB_STRING);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
