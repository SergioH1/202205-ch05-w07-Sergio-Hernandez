import { iRobot } from "../models/robot";

export function ListRobots({ robots }: { robots: Array<iRobot> }) {
  console.log(robots);
  return (
    <>
      <ul className="container-robots">
        {robots.map((robot) => (
          <li key={robot._id}>
            <p>{robot.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
