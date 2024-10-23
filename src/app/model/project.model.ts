import { model, Schema } from "mongoose";
import { IProject } from "../interface/project.interface";

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    technology: { type: [String], required: true },
    description: { type: String, required: true },
    githubLink: { type: String, required: true },
    liveLink: { type: String, required: true },
    overview: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Project = model<IProject>("Project", ProjectSchema);

export default Project;
