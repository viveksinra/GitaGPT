import mongoose from "mongoose";

const SolutionSchema = new mongoose.Schema({
  userId: {
    type: String,
    trim: true,
  },
  question:{
    type:String,
    default:""
},
answer:{
    type:String,
    default:""
},
  
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports =
  mongoose.models.Solution || mongoose.model("Solution", SolutionSchema);
