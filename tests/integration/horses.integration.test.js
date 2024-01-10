import supertest from "supertest";
import { app } from "../../src/app.js";

const request = supertest(app);

test("Ich erwarte ein Array wenn ich Get benutze", async () => {
  const response = await request.get("/api/horses");
  expect(response.statusCode).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});
