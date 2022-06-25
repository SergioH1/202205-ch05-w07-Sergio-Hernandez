import { createAction } from "@reduxjs/toolkit";
import { RobotModel } from "../model/robot.model";
import { actionTypes } from "./action.types";

export interface iAction {
  type: actionTypes;
  payload?: any;
}

export const loadRobotAction = createAction<Array<RobotModel>>(
  actionTypes["robot@load"].toLocaleString()
);
export const addRobotAction = createAction<RobotModel>(
  actionTypes["robot@add"].toLocaleString()
);
export const updateRobotAction = createAction<RobotModel>(
  actionTypes["robot@update"].toLocaleString()
);
export const deleteRobotAction = createAction<RobotModel>(
  actionTypes["robot@delete"].toLocaleString()
);
