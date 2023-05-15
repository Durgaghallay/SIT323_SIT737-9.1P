const mongoose = require("mongoose");

const connectDB = async () => {
  const username = encodeURIComponent(process.env.MONGODB_USERNAME);
  const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
  const connectionString = `mongodb://${username}:${password}@mongo-service:27017/todo-app?authSource=admin`;
  console.log(encodeURIComponent(process.env.MONGODB_CONNECTION_STRING));
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectDB;
