import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const admin = (
    <>
      <li className="mt-2">
        <Link to="/dashboard/manage-crises">
          Manage Crises
        </Link>
      </li>
      <li>
        <Link to="/dashboard/manage-users">
          {" "}
          Manage Users
        </Link>
      </li>
      <li>
        <Link to="#">
          Manage Reports
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-x-auto">
          {/* Page content here */}
          <div className="mt-10">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-teal-950 text-white ">
            <div className="flex items-center">
              {/* <img className="w-8" src={logo} alt="" /> */}
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <hr className="w-full mt-2 border-1 mx-auto border-black" />

            {/* Sidebar content here */}
            <div>
              {admin}
            </div>

            <hr className="w-full mt-2 border-1 mx-auto border-black" />
            <li className="pt-1">
              <Link to="/">
                Home
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
