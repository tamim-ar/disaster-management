import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home/Home";
import Volunteers from "../page/Volunteers/Volunteers";
import Login from "../page/Register/Login/Login";
import SignUp from "../page/Register/Signup/Signup";

import ManageUsers from "../page/Dashboard/ManageUsers/ManageUsers";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Donation from "../page/Donation/Donation";
import Crisis from "../page/Crisis/Crisis";
import ManageCrises from "../page/Dashboard/ManageCrises/ManageCrises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Volunteers",
        element: <Volunteers></Volunteers>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "Donation",
        element: <Donation></Donation>,
      },
      {
        path: "Crisis",
        element: <Crisis></Crisis>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "manage-users",
        element: (
            <ManageUsers></ManageUsers>
        ),
      },
      {
        path: "manage-crises",
        element: (
            <ManageCrises></ManageCrises>
        ),
      },
      {
        path: "manage-volunteers",
      }
    ],
  },
]);

export default router;
