const app = require("./app");
const dotenv = require("dotenv");
const ConnectToMongo = require("./config/db");
const cloudinary = require("cloudinary");

//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shuting down the server due to uncaughtException");
});

// const __dirname = path.resolve();

dotenv.config({ path: "backend/config/config.env" });
console.log(process.env.PORT);

//Connecting to mongo
ConnectToMongo();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shuting down the server due to unhandledRejection");
  server.close(() => {
    // process.exit(1);
  });
});
