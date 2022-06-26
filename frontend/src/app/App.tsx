import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListRobots } from "../components/listRobots";
import { loadRobotsAction } from "../reducers/robots/robot.action.creators";
import { RobotHttpStore } from "../services/robot.http.store";
import { iStore } from "../store/store";

export function App() {
  const dispatcher = useDispatch();
  const apiRobots = useMemo(() => new RobotHttpStore(), []);
  useEffect(() => {
    apiRobots.getAllRobots().then((robots) => {
      dispatcher(loadRobotsAction);
      console.log(robots);
    });
  }, [apiRobots, dispatcher]);

  const robots = useSelector((store: iStore) => store.robots);

  return (
    <>
      <ListRobots robots={robots}></ListRobots>
    </>
  );
}
