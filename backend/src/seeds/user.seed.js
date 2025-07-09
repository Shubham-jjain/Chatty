import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [

  {
    email: "suresh.kumar@example.com",
    fullName: "Suresh Kumar Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "aryan.jain@example.com",
    fullName: "Aryan Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "shubham.jain@example.com",
    fullName: "Shubham Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "archit.gupta@example.com",
    fullName: "Archit Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "hardik.goel@example.com",
    fullName: "Hardik Goel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    email: "sonali.jain@example.com",
    fullName: "Sonali Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "reena.jain@example.com",
    fullName: "Reena Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },

  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "rahul.verma@example.com",
    fullName: "Rahul Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    email: "ananya.singh@example.com",
    fullName: "Ananya Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "rohit.patel@example.com",
    fullName: "Rohit Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    email: "isha.mehta@example.com",
    fullName: "Isha Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "karthik.nair@example.com",
    fullName: "Karthik Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    email: "neha.agarwal@example.com",
    fullName: "Neha Agarwal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "vishal.seth@example.com",
    fullName: "Vishal Seth",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
