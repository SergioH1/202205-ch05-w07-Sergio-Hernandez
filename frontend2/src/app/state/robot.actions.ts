import { createAction, props } from '@ngrx/store';
import { iRobot } from '../interface';

export const addRobot = createAction(
  '[Robot List] Add Robot',
  props<{ RobotId: string }>()
);

export const removeRobot = createAction(
  '[Robot Collection] Remove Robot',
  props<{ RobotId: string }>()
);

export const retrievedRobotList = createAction(
  '[Robot List/API] Retrieve Robots Success',
  props<{ Robots: ReadonlyArray<iRobot> }>()
);
