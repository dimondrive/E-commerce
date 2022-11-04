import { Outlet, Link } from "react-router-dom";

export default function Root() {
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
      </div>
    </>
  );
}
