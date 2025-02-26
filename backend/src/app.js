import express from "express";
import aiRoutes from "./routes/ai.route.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "*", // Allow all origins (or specify your Vercel frontend URL)
        credentials: true,
    })
);

app.use("/ai", aiRoutes);

app.use("/", (req, res) => {
    res.send("Hello World...");
});

export default app;
