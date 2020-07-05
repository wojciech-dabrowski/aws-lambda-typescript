import { CalculateStudentGradeHandler } from "./calculate-student-grade-handler";
import { CalculateStudentGradeResponse } from "./models/calculate-student-grade-response";
import { CalculateStudentGradeRequest } from "./models/calculate-student-grade-request";

const functionHandler: CalculateStudentGradeHandler = new CalculateStudentGradeHandler();

export const handler = async (
  request: CalculateStudentGradeRequest
): Promise<CalculateStudentGradeResponse> => functionHandler.handle(request);
