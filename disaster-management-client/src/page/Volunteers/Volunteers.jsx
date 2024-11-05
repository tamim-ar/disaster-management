import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../providers/AuthProviders";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState();
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 my-6">
      {volunteers?.map((item) => (
        <div className="card w-full bg-base-100 shadow-xl" key={item._id}>
          <figure className="px-10 pt-10">
            <img src={item.image} alt="Shoes" className="rounded-xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Volunteers;
