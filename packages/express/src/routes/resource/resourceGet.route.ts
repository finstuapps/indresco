import { expressHandler, log } from "jaypie";
import type { Request } from "express";

interface ResourceGetResponse {
  message: string;
  query: Record<string, any>;
  timestamp: string;
}

const handler = async (req: Request): Promise<ResourceGetResponse> => {
  log.trace("[resourceGet] Handling resource GET request");
  const { query } = req;
  
  if (Object.keys(query).length > 0) {
    log.var({ queryKeys: Object.keys(query).length });
  }
  
  return {
    message: "Resource endpoint",
    query,
    timestamp: new Date().toISOString(),
  };
};

export default expressHandler(handler);