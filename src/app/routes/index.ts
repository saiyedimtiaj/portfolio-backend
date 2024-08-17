import { Router } from "express";
import { courseRoute } from "../modules/course/course.route";

const router = Router();

const moduleRoutes = [
  {
    path: "",
    route: courseRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
