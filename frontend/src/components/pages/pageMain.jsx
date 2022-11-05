import { Outlet, Link } from "react-router-dom";
import Countdown from "react-countdown";

export default function Root() {
  const Achiements = () => <h1>Вы дождались 10 секунд</h1>;
  return (
    <>
      <div id="detail">
        <Link className="home-link" to={`/`}>
          Home
        </Link>
        <Link to={`/card`}>Card</Link>
        <div className="flex flex-row gap-5">
          <Outlet />
        </div>

        <Countdown date="2022-12-29T00:00:00">
          <Achiements />
        </Countdown>
      </div>
    </>
  );
}
