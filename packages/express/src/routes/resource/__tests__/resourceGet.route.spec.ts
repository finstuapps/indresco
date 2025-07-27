import { describe, expect, it } from "vitest";
import { log } from "jaypie";
import resourceGet from "../resourceGet.route.js";

describe("Resource Get Route", () => {
  describe("Base Cases", () => {
    it("is a Function", () => {
      expect(resourceGet).toBeFunction();
    });

    it("works", async () => {
      const mockRequest = {
        query: {},
        locals: {},
      } as any;

      const response = await resourceGet(mockRequest);

      expect(response).toBeDefined();
    });
  });

  describe("Happy Paths", () => {
    it("returns resource data with query parameters", async () => {
      const mockRequest = {
        query: { search: "test" },
        locals: {},
      } as any;

      const response = await resourceGet(mockRequest);

      expect(response.message).toBe("Resource endpoint");
      expect(response.query).toEqual({ search: "test" });
      expect(response.timestamp).toBeDefined();
      expect(log).not.toBeCalledAboveTrace();
    });
  });

  describe("Features", () => {
    it("handles empty query", async () => {
      const mockRequest = {
        query: {},
        locals: {},
      } as any;

      const response = await resourceGet(mockRequest);

      expect(response.message).toBe("Resource endpoint");
      expect(response.query).toEqual({});
      expect(response.timestamp).toBeDefined();
    });

    it("includes current timestamp in ISO format", async () => {
      const mockRequest = {
        query: {},
        locals: {},
      } as any;

      const response = await resourceGet(mockRequest);

      expect(response.timestamp).toMatch(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
      );
    });
  });
});
