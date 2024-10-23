import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import Project from "../model/project.model";

export const createProject = catchAsync(async (req, res) => {
  // Parse the "data" field from req.body
  const { data } = req.body;
  const parsedData = JSON.parse(data);

  // Access the uploaded file (since multer's single() stores the file in req.file)
  const imageFile = req.file;

  const projectData = {
    title: parsedData.title,
    technology: parsedData.description,
    description: parsedData.description,
    githubLink: parsedData.githubLink,
    liveLink: parsedData.liveLink,
    overview: parsedData.overview,
    image: imageFile?.path,
  };

  const result = await Project.create(projectData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project created successfully!",
    data: result,
  });
});
export const getAllProject = catchAsync(async (req, res) => {
  const result = await Project.find();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrive successfully!",
    data: result,
  });
});

export const getSingleProject = catchAsync(async (req, res) => {
  const result = await Project.findById(req.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrive successfully!",
    data: result,
  });
});
export const deleteProject = catchAsync(async (req, res) => {
  const result = await Project.findByIdAndDelete(req.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project delete successfully!",
    data: result,
  });
});
