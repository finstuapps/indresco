import { expressHandler } from "jaypie";
import type { Request } from "express";

interface ResourceGetResponse {
  message: string;
  query: Record<string, any>;
  timestamp: string;
}

const handler = async (req: Request): Promise<ResourceGetResponse> => {
  const { query } = req;
  
  return {
    message: "Resource endpoint",
    query,
    timestamp: new Date().toISOString(),
  };
};

export default expressHandler(handler);