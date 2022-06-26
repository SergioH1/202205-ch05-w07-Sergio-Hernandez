export interface iRobot {
  _id?: string;
  name: string;
  image: string;
  speed: number;
  endurance: number;
  creationDate: string;
}

export class Robot implements iRobot {
  constructor(
    public name: string,
    public image: string,
    public speed: number,
    public endurance: number,
    public creationDate: string
  ) {}
}
