import supertest from "supertest";
import { app } from "../../src/app.js";
import { Horse } from "../../src//horses/horses.model.js";
import { jest } from "@jest/globals";

const request = supertest(app);

describe('Check the Route "/" Get', () => {
  test("I expect a code 200 when I use the route Get properly", async () => {
    const response = await request.get("/api/horses");
    expect(response.statusCode).toBe(200);
  });

  test("I expect an array of data when I use the ruote Get", async () => {
    const response = await request.get("/api/horses");
    expect(response.body).toBeInstanceOf(Array);
  });
  test("I expect a code 500 if I use the Get route incorrectly", async () => {
    // Mock find function to throw an exception
    jest.spyOn(Horse, "find").mockImplementationOnce(() => {
      // find is a static method of the Horse class, not an instance method. So you have to spy on the find method directly in the Horse class.
      // DONT USE Horse.prototyp like in POST
      throw new Error("Simulated error");
    });
    const response = await request.get("/api/horses");
    expect(response.statusCode).toBe(500);
    // Restore the original implementation of the find function
    jest.spyOn(Horse, "find").mockRestore();
  });
});

// --------------------

describe('Check the Route "/" POST', () => {
  test("I expect a code 201 when I use the route Post properly", async () => {
    const response = await request.post("/api/horses");
    expect(response.statusCode).toBe(201);
  });

  test("I expect an object as response when I use the Ruote post", async () => {
    const response = await request.post("/api/horses");
    expect(response.body).toBeInstanceOf(Object);
  });

  test("I expect a code 500 if I use the post route incorrectly", async () => {
    // Mock find function to throw an exception
    jest.spyOn(Horse.prototype, "save").mockImplementationOnce(() => {
      // USE Horse.prototyp for "save" in POST
      throw new Error("Simulated error");
    });
    const response = await request.post("/api/horses").send({
      name: "testhorse",
      age: 2,
      breed: "testbreed",
    });
    expect(response.statusCode).toBe(500);
    // Restore the original implementation of the find function
    jest.spyOn(Horse.prototype, "save").mockRestore();
  });
});
