import { Model, Schema, model } from "mongoose";
import { ICourse } from "./course.interface";

const CourseSchema: Schema<ICourse> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: {
      public_id: { type: String },
      url: { type: String },
    },
    tags: { type: String, required: true },
    level: { type: String, required: true },
    demoUrl: { type: String, required: true },
    title: { type: String, required: true },
    language: { type: String, required: true },
    category: { type: String, required: true },
    benefits: { type: [{ title: String }], default: [] },
    prerequisites: { type: [{ title: String }], default: [] },
  },
  {
    timestamps: true,
  }
);

export const courseModel: Model<ICourse> = model("course", CourseSchema);
