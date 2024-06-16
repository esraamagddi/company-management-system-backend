import User from './user.model.js';
import { hashFunction } from '../../../lib/hashAndCompare.js';
 
 

export const register = asyncHandler(async (req, res) => {
  const {
    username,
    password,
    firstName,
    email,
    lastName,
    dateOfBirth,
    address,
    jobLevel,
    mobileNumber,
    contract,
  } = req.body;
  console.log(req.body);
  const hashedPassword = await hashFunction({ plainText: password });
  const newUser = await User.create({
    username,
    password: hashedPassword,
    firstName,
    email,
    lastName,
    dateOfBirth,
    address,
    jobLevel,
    mobileNumber,
    contract,
  });
  res.status(201).json({ message: 'User registered successfully', newUser });
});