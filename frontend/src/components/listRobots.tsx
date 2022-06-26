import { iRobot } from "../models/robot";

export function ListRobots({ robots }: { robots: Array<iRobot> }) {
  return (
    <>
      <ul className="container-robots">
        {robots.map((robot) => (
          <li key={robot._id}>
            <img src={robot.img} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
}
