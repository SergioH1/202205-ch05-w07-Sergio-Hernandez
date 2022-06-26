import { RobotModel } from "../model/robot.model";

export class HttpStoreRobots {
  url: string;
  constructor() {
    this.url = "http://localhost:3700/robots";
  }
  getRobots(): Promise<Array<RobotModel>> {
    // GET
    return fetch(this.url).then((resp) => {
      console.log(resp.status);
      return resp.json();
    });
  }
  getRobot(id: RobotModel["_id"]): Promise<RobotModel> {
    // GET
    return fetch(this.url + `/${id}`).then((resp) => resp.json());
  }
  setRobot(Robot: RobotModel): Promise<RobotModel> {
    // POST
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(Robot),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  updateRobot(Robot: RobotModel): Promise<Partial<RobotModel>> {
    // PUT / PATCH
    return fetch(this.url + `/${Robot._id}`, {
      method: "PATCH",
      body: JSON.stringify(Robot),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  deleteRobot(id: string): Promise<number> {
    // DELETE
    return fetch(this.url + `/${id}`, {
      method: "DELETE",
    }).then((response) => response.status);
  }
}
