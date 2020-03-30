import { FunctionNameHandler } from "./function-name-handler";

const functionHandler: FunctionNameHandler = new FunctionNameHandler();

export const handler = async (): Promise<void> => functionHandler.handle();
