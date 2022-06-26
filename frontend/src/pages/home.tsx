import { useSelector } from "react-redux";

import { List } from "../components/List";
import { iStore } from "../store/store";

export function Home() {
  const robots = useSelector((store: iStore) => store.robots);

  const template = (
    <>
      <h3>Robots</h3>
      <List data={robots} />
    </>
  );
  return template;
}

export default Home;
