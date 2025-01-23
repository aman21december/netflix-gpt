import OpenAI from "openai";
import { OPENAI_Secret } from "./constants2";

const openai = new OpenAI({
  apiKey: OPENAI_Secret,
  dangerouslyAllowBrowser: true 
});

export default openai