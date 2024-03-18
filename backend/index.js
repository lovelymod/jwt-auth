import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AdminRoute from "./routes/admin.route.js";
dotenv.config();

const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());
app.use("/auth", AdminRoute);

app.listen(8080, () => console.log("Server running at port 8080"));
