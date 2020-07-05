import { CalculateStudentGradeRequest } from "./models/calculate-student-grade-request";
import { CalculateStudentGradeResponse } from "./models/calculate-student-grade-response";

export class CalculateStudentGradeHandler {
  public handle = async (
    request: CalculateStudentGradeRequest
  ): Promise<CalculateStudentGradeResponse> => {
    console.log("Hello from function handler!");
    console.log(`Payload: ${JSON.stringify(request)}`);

    return {
      finalGrade: 5,
      hasPassed: true,
    };
  };
}
