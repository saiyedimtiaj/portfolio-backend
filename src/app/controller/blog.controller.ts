import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import Blog from "../model/blog.model";

export const createBlog = catchAsync(async (req, res) => {
  const { data } = req.body;
  const parsedData = JSON.parse(data);
  const imageFile = req.file;

  const projectData = {
    title: parsedData.title,
    tag: parsedData.tag,
    overview: parsedData.overview,
    image: imageFile?.path,
  };

  const result = await Blog.create(projectData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project created successfully!",
    data: result,
  });
});
export const getAllBlog = catchAsync(async (req, res) => {
  const result = await Blog.find().sort({ createdAt: "desc" });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs retrive successfully!",
    data: result,
  });
});

export const getSingleBlog = catchAsync(async (req, res) => {
  console.log(req.params);
  const result = await Blog.findById(req?.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrive successfully!",
    data: result,
  });
});

export const deleteBlog = catchAsync(async (req, res) => {
  const result = await Blog.findByIdAndDelete(req.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog delete successfully!",
    data: result,
  });
});
