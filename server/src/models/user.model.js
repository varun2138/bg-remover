import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  creditBalance: {
    type: Number,
    default: 6,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
