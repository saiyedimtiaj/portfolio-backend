import { Router } from "express";
import { courseController } from "./course.controller";

const route = Router();

route.get("/get-courses", courseController.getAllCourse);

export const courseRoute = route;
