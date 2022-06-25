import { createReducer } from "@reduxjs/toolkit";
import { RobotModel } from "../model/robot.model";
import * as ac from "./action.creator";
const initialState: Array<RobotModel> = [];

export const robotReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(ac.loadRobotAction, (state, action) => [...action.payload])
    .addCase(ac.addRobotAction, (state, action) => [...state, action.payload])
    .addCase(ac.updateRobotAction, (state, action) =>
      state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    )
    .addCase(ac.deleteRobotAction, (state, action) =>
      state.filter((item) => item.id !== action.payload.id)
    )
    .addDefaultCase((state) => state);
});
