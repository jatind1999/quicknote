import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import crudRouter from "./routes/crud.js";

dotenv.config();
const app = express();
const corsOptions = {
    origin: "http://localhost:1234",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/", crudRouter);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
