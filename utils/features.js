import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { serialize } from "cookie";
import { User } from "../models/user";

export const connectDB = async () => {
  console.log("hllo");
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Todo13",
  });
  console.log(`Database Connected on ${connection.host}`);
};

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};

export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY);
};

export const checkAuth = async (req) => {
  const cookie = req.headers.cookie;
  if (!cookie) return null;
  console.log(cookie);
  const token = cookie.split("=")[1];

  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  return await User.findById(decoded._id);
};