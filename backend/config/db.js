const mongoose = require("mongoose");

ConnectToMongo = () => {
  mongoose.connect(process.env.URI).then((data) => {
    console.log(`Connected to mongo successfully ${data.connection.host}`);
  });
};

module.exports = ConnectToMongo;
