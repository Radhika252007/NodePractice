import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import dbConnection from "./database/dbConnection.js";

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || "sdfghjkjckvhjk",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        ttl: 60 * 60, 
        autoRemove: 'native'
    }),
    cookie: {
        maxAge:  60 * 60 , 
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
    
}));