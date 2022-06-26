import { RobotModel } from "../model/robot.model";

import * as action from "./action.creator";
import { robotReducer } from "./robot.reducer";
describe("Given the RobotReducer", () => {
  let mockedArray: Array<RobotModel> = [
    {
      id: "1",
      name: "3Bot",
      img: "",
      speed: 6,
      endurance: 9,
      creationDate: "8/3/1984",
    },
  ];

  describe("When the method loadRobotAction is called with array robots", () => {
    test("Then it should return a new state with the action payload", () => {
      //Arrange
      const initialState: RobotModel[] = [];
      const antionForTest = action.loadRobotAction(mockedArray);
      //Asert
      const newState = robotReducer(initialState, antionForTest);
      //Act
      expect(newState).toEqual(mockedArray);
      expect(newState).toHaveLength(1);
    });
  });
  describe("When the method addRobot is called with an array", () => {
    test("Them it should return a new stated with the robot added", () => {
      const initialState: RobotModel[] = [];
      const actionForTest = action.addRobotAction(mockedArray[0]);
      const newState = robotReducer(initialState, actionForTest);
      //Asse
      expect(newState).toHaveLength(1);
    });
  });
  describe("When calling it with update action an array products", () => {
    test("It should return a new state with the RobotModel updated", () => {
      //Arrange
      const initialState: RobotModel[] = [mockedArray[0]];
      const updateRobotModel = { ...mockedArray[0], name: "pepe" };
      const actionForTest = action.updateRobotAction(updateRobotModel);
      // Act

      const newState = robotReducer(initialState, actionForTest);
      //Asse
      expect(newState).toHaveLength(1);
      expect(newState).toEqual([updateRobotModel]);
    });
  });
  describe("When calling it with update action an same array products", () => {
    test("It should return a new state with the RobotModel updated", () => {
      const newState = robotReducer(
        [],
        action.updateRobotAction(mockedArray[0])
      );

      expect(newState).toHaveLength(0);
      expect(newState).toEqual([]);
    });
  });
  describe("When calling it with delete action", () => {
    test("It should load the mocked array of productss without the deleted one", () => {
      const initialState: RobotModel[] = [mockedArray[0]];
      const deleteRobotModel = { ...mockedArray[0], id: "1" };
      const actionForTest = action.deleteRobotAction(deleteRobotModel);
      // Act

      const newState = robotReducer(initialState, actionForTest);
      //Asse
      expect(newState).toHaveLength(0);
    });
  });
});
