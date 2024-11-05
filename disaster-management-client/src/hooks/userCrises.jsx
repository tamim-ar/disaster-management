import { useQuery } from "react-query";

const useCrises = () => {
  const { refetch, data = [] } = useQuery(["crisis"], async () => {
    const res = await fetch(
      "http://localhost:5000/crises"
    );
    const crises = await res.json();
    console.log(crises)
    return crises;
  });
  return { data, refetch };
};

export default useCrises;
