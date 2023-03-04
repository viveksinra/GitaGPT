import mongoose from "mongoose";
//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

const connectMongo = async () => {
//Attempt to connect to database
mongoose
  .connect(db , { useNewUrlParser: true , useUnifiedTopology: true} )
  .then(() => console.log(" MongoDB connected successfully"))
  .catch(err => console.log(err));

  //import models
//   require("./models/User")
};

export default connectMongo;
