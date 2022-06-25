import { configureStore } from "@reduxjs/toolkit";
import { RobotModel } from "../model/robot.model";
import { robotReducer } from "../reducer/robot.reducer";

// import { createStore} from "redux";

export interface iCounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}
export interface iState {
  tasks: Array<RobotModel>;
  counter: iCounterState;
}

const preloadedState = {
  tasks: [],
  counter: {
    value: 0,
    status: "idle",
  },
};

export const store = configureStore({
  reducer: {
    tasks: robotReducer,
  },
  preloadedState,
});
