export class RobotModel implements IRobot {
  _id!: string;
  constructor(
    public name: string,
    public img: string,
    public speed: number,
    public endurance: number,
    public creationDate: string
  ) {}
}
export interface IRobot {
  _id: string;
  name: string;
  img: string;
  speed: number;
  endurance: number;
  creationDate: string;
}
