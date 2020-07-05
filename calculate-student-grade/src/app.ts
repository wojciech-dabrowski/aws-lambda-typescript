import { calculateStudentGradeHandler } from "./calculate-student-grade-handler";
import { CalculateStudentGradeResponse } from "./models/calculate-student-grade-response";
import { CalculateStudentGradeRequest } from "./models/calculate-student-grade-request";

export const handler = async (
  request: CalculateStudentGradeRequest
): Promise<CalculateStudentGradeResponse> =>
  calculateStudentGradeHandler(request);
