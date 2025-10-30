import User from "../models/User.js";
import hashPassword from "../utils/hashPassword.js";
import ComparePassword from "../utils/comparePassword.js";
import GenerateToken from "../utils/generateToken.js";
export async function Signup(req, res) {
  try {
    const { name, email, password, role } = req.body;

    const isEmailExists = await User.findOne({ email });
    if (isEmailExists) {
      res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }

    const match = ComparePassword(password, user.password);

    if(!match) {
        res.status(401).json({ message: "Invalid credentials" });
    }

    const token = GenerateToken(user);
    res.status(200).json({ message: "User logged in successfully", data: { token }});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
