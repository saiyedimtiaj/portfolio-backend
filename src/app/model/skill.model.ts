import { model, Schema } from "mongoose";

export interface ISkill {
  title: string;
  image: string;
}

const SkillSchema = new Schema<ISkill>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Skill = model<ISkill>("Skill", SkillSchema);

export default Skill;
