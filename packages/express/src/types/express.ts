declare module "express-serve-static-core" {
  interface Request {
    locals?: Record<string, any>;
  }
}

export {};
