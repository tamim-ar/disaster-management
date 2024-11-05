import { useQuery } from "react-query";

const useUser = () => {
  const { refetch, data = [] } = useQuery(["user"], async () => {
    const res = await fetch(
      "http://localhost:5000/users"
    );
    const allUsers = await res.json();
    return allUsers;
  });
  return { data, refetch };
};

export default useUser;
