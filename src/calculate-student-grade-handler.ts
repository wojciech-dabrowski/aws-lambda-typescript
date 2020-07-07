import { CalculateStudentGradeRequest } from "./models/calculate-student-grade-request";
import { CalculateStudentGradeResponse } from "./models/calculate-student-grade-response";

const roundToNearestHalf = (value: number): number => {
  return Math.round(value * 2) / 2;
};

const calculateFinalGrade = (
  lectureGrade: number,
  exerciseGrade: number,
  workshopGrade: number
): number => {
  const lectureWeight = 0.2;
  const exerciseWeight = 0.3;
  const workshopWeight = 0.5;

  const rawFinalGrade =
    lectureGrade * lectureWeight +
    exerciseGrade * exerciseWeight +
    workshopGrade * workshopWeight;

  return roundToNearestHalf(rawFinalGrade);
};

export const calculateStudentGradeHandler = async (
  request: CalculateStudentGradeRequest
): Promise<CalculateStudentGradeResponse> => {
  const finalGrade = calculateFinalGrade(
    request.lectureGrade,
    request.exerciseGrade,
    request.workshopGrade
  );

  return {
    finalGrade: finalGrade,
    hasPassed: finalGrade >= 3,
  };
};
