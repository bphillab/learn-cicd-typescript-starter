import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});

const headers1 = {
  authorization: "Bearer test-token",
  "x-api-key": "test-key",
};
const headers2 = {
  authorization: "ApiKey test-token",
};
const headers3 = {
  authorization: "ApiKey",
};
describe("getAPIKey", () => {
  test("returns the api key from the headers", () => {
    expect(getAPIKey(headers1)).toBe(null);
    expect(getAPIKey(headers2)).toBe("test-token");
    expect(getAPIKey(headers3)).toBe(null);
  });
});
