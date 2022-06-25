import { RobotModel } from "../model/robot.model";

export class HttpStoreTasks {
  url: string;
  constructor() {
    this.url = "http://localhost:3700/robots";
  }
  getTasks(): Promise<Array<RobotModel>> {
    // GET
    return fetch(this.url).then((resp) => {
      console.log(resp.status);
      return resp.json();
    });
  }
  getTask(id: RobotModel["id"]): Promise<RobotModel> {
    // GET
    return fetch(this.url + `/${id}`).then((resp) => resp.json());
  }
  setTask(task: RobotModel): Promise<RobotModel> {
    // POST
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  updateTask(task: RobotModel): Promise<Partial<RobotModel>> {
    // PUT / PATCH
    return fetch(this.url + `/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  deleteTask(id: string): Promise<number> {
    // DELETE
    return fetch(this.url + `/${id}`, {
      method: "DELETE",
    }).then((response) => response.status);
  }
}
