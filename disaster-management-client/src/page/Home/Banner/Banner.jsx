import { Link } from "react-router-dom";
import slider1 from "../../../image/slider1.jpg";
import slider2 from "../../../image/slider2.jpg";
import slider3 from "../../../image/slider3.jpg";
import slider4 from "../../../image/slider4.jpg";
const Banner = () => {
  return (
    <section>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          {" "}
          <img src={slider1} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Your Donation Can Change a Life
              </h1>
              <p>
               Education for Every Child. Help us make learning accessible for all!
              </p>

              <div>
               <Link to="/donation">
                <button className="btn btn-outline btn-warning">
                  Donate
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full object-cover " />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Plant Hope, Grow a Greener Future.              
               </h1>
              <p>
              Support Environmental Initiatives to Restore Our Planet!
              </p>

              <div>
               <Link to="/donation">
                <button className="btn btn-outline btn-warning">
                  Donate
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Health is a Right, Not a Privilege.
              </h1>
              <p>
                Your Donation Provides Essential Healthcare to Those Who Need It Most
              </p>

              <div>
               <Link to="/donation">
                <button className="btn btn-outline btn-warning">
                  Donate
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Share the Gift of Food
              </h1>
              <p>
                Every Meal Matters. Together, we can nourish families in need.
              </p>

              <div>
                <Link to="/donation">
               <Link to="/donation">
                <button className="btn btn-outline btn-warning">
                  Donate
                </button>
                </Link>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
