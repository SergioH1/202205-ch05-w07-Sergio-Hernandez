import { iRobot, Robot } from "../models/robot";
import { RobotHttpStore } from "./robot.http.store";

const robot1 = new Robot("", "", 0, 0, "") as iRobot;
const robot2 = new Robot("", "", 0, 0, "") as iRobot;
const robot3 = new Robot("", "", 0, 0, "") as iRobot;

describe("Given RobotHttpStore service", () => {
  describe("When called getRobot", () => {
    test("Then it should return a Robot from the cart db", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(robot1),
      });
      const api = new RobotHttpStore();
      const response = await api.getRobot("");
      expect(response).toEqual(robot1);
    });
  });
  describe("When called getAllRobots", () => {
    test("Then it should return a Robots array", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([robot1, robot3]),
      });
      const api = new RobotHttpStore();
      const response = await api.getAllRobots();
      expect(response).toEqual([robot1, robot3]);
    });
  });
  describe("When called setRobot with a Robot to add", () => {
    test("Then it should return the added Robot", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(robot2),
      });
      const api = new RobotHttpStore();
      const response = await api.setRobot(robot2);
      expect(response).toEqual(robot2);
    });
  });
  describe("When called updateRobot with a modified existent Robot", () => {
    test("Then it should return the updated Robot", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({ ...robot1, promotion: true }),
      });
      const api = new RobotHttpStore();
      const response = await api.updateRobot(robot1._id, {
        ...robot1,
        name: "new",
      });
      const expectedResponse = { ...robot1, promotion: true };
      expect(response).toEqual(expectedResponse);
    });
  });
  describe("When called deleteRobot with a Robot", () => {
    test("Then it should return robot deleted", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(robot3),
      });
      const api = new RobotHttpStore();
      const response = await api.deleteRobot(robot3._id);
      expect(response).toEqual(robot3);
    });
  });
});
