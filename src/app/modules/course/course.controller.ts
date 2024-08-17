import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { courseModel } from "./course.model";

const getAllCourse = catchAsync(async (req, res) => {
  const course = await courseModel
    .find()
    .select(
      "-courseData.videoUrl -courseData.suggestion -courseData.questions -courseData.links"
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic department is created succesfully",
    data: course,
  });
});

export const courseController = {
  getAllCourse,
};
