import express, { Request, Response } from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from setup file");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
