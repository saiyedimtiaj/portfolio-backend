import httpStatus from "http-status";
import Skill from "../model/skill.model";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

export const createSkill = catchAsync(async (req, res) => {
  const { data } = req.body;
  const parsedData = JSON.parse(data);
  const imageFile = req.file;

  const projectData = {
    title: parsedData.title,
    image: imageFile?.path,
  };

  const result = await Skill.create(projectData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill created successfully!",
    data: result,
  });
});
export const getAllSkill = catchAsync(async (req, res) => {
  const result = await Skill.find();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill retrive successfully!",
    data: result,
  });
});

export const deleteSkill = catchAsync(async (req, res) => {
  const result = await Skill.findByIdAndDelete(req.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill delete successfully!",
    data: result,
  });
});
