import { Outlet } from "react-router-dom";
import Footer from "./page/shared/Footer/Footer";
import Navbar from "./page/shared/Navber/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-449px)] pt-[64px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
