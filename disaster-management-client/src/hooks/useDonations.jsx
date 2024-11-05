import { useQuery } from "react-query";

const useDonations = () => {
  const { refetch, data = [] } = useQuery(["donations"], async () => {
    const res = await fetch(
      "http://localhost:5000/donations"
    );
    const donations = await res.json();
    return donations;
  });
  return { data, refetch };
};

export default useDonations;
