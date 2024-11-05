import { useEffect, useState } from "react";

const RecentCrisis = () => {
  const [crisisList, setCrisisList] = useState([]);
  
  useEffect(() => {
    fetch('crisislist.json')
        .then(res => res.json())
        .then(data => setCrisisList(data))
}, [])

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-semibold leading-none  text-center text-black">
        Recent Crisis
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-8">
        {crisisList.slice(0, 3)?.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 border border-gray-300 rounded-md"
          >
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.topicName}
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
            )}
            <h4 className="font-semibold">Topic: {item.topicName}</h4>
            <p>
              <strong>Issue:</strong> {item.issueName}
            </p>
            <p>
              <strong>Location:</strong> {item.location}
            </p>
            <p>
              <strong>Effect:</strong> {item.effect}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCrisis;
