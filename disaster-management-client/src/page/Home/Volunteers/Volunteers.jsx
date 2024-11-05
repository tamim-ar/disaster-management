import { useEffect, useState } from "react";

const Volunteers = () => {
  const [Volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:5000/users"
    )
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-semibold leading-none  text-center text-black">
        Our Volunteers
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 mt-16 ">
        {Volunteers?.map((item) => (
          <div className="card w-full bg-base-100 shadow-xl" key={item._id}>
            <figure className="px-10 pt-10">
              <img src={item.image} alt="Volunteers" className="rounded-xl h-60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Volunteers;
