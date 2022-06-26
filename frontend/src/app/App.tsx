import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListRobots } from "../components/listRobots";
import { loadRobotsAction } from "../reducers/robots/robot.action.creators";
import { RobotHttpStore } from "../services/robot.http.store";
import { iStore } from "../store/store";

export function App() {
  const apiRobots = useMemo(() => new RobotHttpStore(), []);
  const robots = useSelector((store: iStore) => store.robots);

  const dispatcher = useDispatch();

  useEffect(() => {
    apiRobots.getAllRobots().then((robots) => {
      dispatcher(loadRobotsAction(robots));
    });
  }, [dispatcher]);

  return (
    <>
      <ListRobots robots={robots}></ListRobots>
    </>
  );
}
