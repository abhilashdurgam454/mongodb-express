
import mongoose from "mongoose";

  mongodbConnection=mongoose.connect(process.env.MONGODB_URI);

export default mongodbConnection;
