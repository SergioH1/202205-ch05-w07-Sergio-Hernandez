import { RobotModel } from "../model/robot.model";
import { HttpStoreRobots } from "./http.store.robot";

describe("Given HttpStoreRobots", () => {
  describe("When we instantiate", () => {
    describe("And we use method getRobots", () => {
      test("Then it should return a array of two Robots", async () => {
        // arrange
        global.fetch = jest.fn().mockResolvedValue({
          json: jest
            .fn()
            .mockResolvedValue([
              new RobotModel("Robot", "", 6, 1, ""),
              new RobotModel("Robot2", "", 6, 1, ""),
            ]),
        });
        // act
        const result = await new HttpStoreRobots().getRobots();
        //
        // assert
        expect(fetch).toBeCalled();
        expect(result.length).toBe(2);
      });
    });
    describe("And we use method getRobot", () => {
      test("Then it should return a array of two Robots", async () => {
        // arrange
        global.fetch = jest.fn().mockResolvedValue({
          json: jest
            .fn()
            .mockResolvedValue([
              new RobotModel("Robot", "", 6, 1, ""),
              new RobotModel("Robot2", "", 6, 1, ""),
            ]),
        });
        // act
        const result = await new HttpStoreRobots().getRobot("1");
        //
        // assert
        expect(fetch).toBeCalled();
      });
    });

    describe("And we use method updateRobot", () => {
      test("Then it should return the updated Robot", async () => {
        // arrange
        const Robot = new RobotModel("Robot", "", 6, 1, "");
        global.fetch = jest.fn().mockResolvedValue({
          json: jest
            .fn()
            .mockResolvedValue(new RobotModel("Robot", "", 6, 1, "")),
        });
        // act
        const result = await new HttpStoreRobots().updateRobot(Robot);
        // assert
        expect(fetch).toBeCalled();
        expect(result.name).toBe("Robot");
      });
    });

    describe("And we use method deleteRobot", () => {
      test("Then it should return a status ok", async () => {
        // arrange
        const deleteId = "1";
        global.fetch = jest.fn().mockResolvedValue({
          status: 200,
        });
        // act
        const result = await new HttpStoreRobots().deleteRobot(deleteId);
        expect(fetch).toBeCalled();
        expect(result).toBe(200);
      });
    });
    describe("And we use method AddRobot", () => {
      test("Then it should return the add favorite Robot", async () => {
        // arrange
        const Robot = new RobotModel("Robot", "", 6, 1, "");
        global.fetch = jest.fn().mockResolvedValue({
          json: jest
            .fn()
            .mockResolvedValue(new RobotModel("Robot", "", 6, 1, "")),
        });
        // act
        const result = await new HttpStoreRobots().setRobot(Robot);
        // assert
        expect(fetch).toBeCalled();
        expect(result.speed).toBe(6);
      });
    });
  });
});
