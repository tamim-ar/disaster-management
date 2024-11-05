import Banner from "../Banner/Banner";
import Volunteers from "../Volunteers/Volunteers";
import RecentCrisis from "../RecentCrisis/RecentCrisis";
import useDonations from "../../../hooks/useDonations";
import { useEffect } from "react";

const Home = () => {
  const{data,refetch} = useDonations();

  useEffect(() => {
    refetch()
  })
  const totalAmount = data.reduce((sum, donation) => sum + donation.donationAmount, 0);
  return (
    <div className="pb-6">
      <Banner></Banner>
      <div>
      <div>
        <h1 className="text-4xl font-semibold leading-none  text-center text-black py-6">
          Total Funds
        </h1>
        <div className="bg-primary text-white text-3xl font-bold text-center w-56 mx-auto py-4">
        {totalAmount} <span className="text-xl">BDT</span>
        </div>
      </div>
      </div>
      <RecentCrisis></RecentCrisis>
      <Volunteers></Volunteers>
    </div>
  );
};

export default Home;
