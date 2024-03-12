import { errorHandler, asyncError } from "../../../middlewares/error.js";
import { User } from "../../../models/user.js";
import { connectDB,cookieSetter,generateToken } from "../../../utils/features.js";
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");

  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return errorHandler(res, 400, "Please enter all fields");
  console.log("hllo 1");

  await connectDB();
  
  
  let user = await User.findOne({ email });
  console.log(user);
  
  if (user) return errorHandler(res, 400, "User registered with this email");
  
  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user._id);

  cookieSetter(res, token, true);

  res.status(201).json({
    success: true,
    message: "Registered Successfully",
    user,
  });
});

export default handler;