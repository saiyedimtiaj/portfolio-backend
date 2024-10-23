import { Router } from "express";
import { multerUpload } from "../config/multer.config";
import {
  createProject,
  deleteProject,
  getAllProject,
  getSingleProject,
} from "../controller/project.controller";
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  getSingleBlog,
} from "../controller/blog.controller";
import {
  createSkill,
  deleteSkill,
  getAllSkill,
} from "../controller/skill.controller";

const router = Router();

router.post("/project", multerUpload.single("image"), createProject);
router.get("/get-project", getAllProject);
router.get("/get-project/:id", getSingleProject);
router.delete("/delete-project/:id", deleteProject);

router.post("/blog", multerUpload.single("image"), createBlog);
router.get("/get-blog", getAllBlog);
router.get("/get-blog/:id", getSingleBlog);
router.delete("/delete-blog/:id", deleteBlog);

router.post("/skill", multerUpload.single("image"), createSkill);
router.get("/get-skill", getAllSkill);
router.delete("/delete-skill/:id", deleteSkill);

export default router;
