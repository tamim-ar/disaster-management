import { useEffect, useState } from "react";

const Crisis = () => {
  const [crisis, setCrisis] = useState({
    topicName: "",
    status: "not approve",
    issueName: "",
    location: "",
    effect: "",
    imageUrl: "", // Added for image URL
  });

  const [crisisList, setCrisisList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/approveCrises')
        .then(res => res.json())
        .then(data => setCrisisList(data))
}, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrisis((prevCrisis) => ({
      ...prevCrisis,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/crises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(crisis),
    })
    setCrisis({ topicName: "", issueName: "", location: "", effect: "", imageUrl: "" }); // Reset all fields
    setIsModalOpen(false);
  };

  const filteredCrisisList = crisisList.filter(
    (item) =>
      item.topicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.issueName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Flex container for button and search input */}
      <div className="flex justify-between w-full max-w-md mt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-4 w-100 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search crisis posts..."
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Create Crisis Post
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Create Crisis Post
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Topic Name
                </label>
                <input
                  type="text"
                  name="topicName"
                  value={crisis.topicName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter topic name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Issue Name
                </label>
                <input
                  type="text"
                  name="issueName"
                  value={crisis.issueName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter issue name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={crisis.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter location"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Effect
                </label>
                <textarea
                  name="effect"
                  value={crisis.effect}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the effect"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  value={crisis.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image URL"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
              >
                Create Crisis
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-red-500 hover:text-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Crisis Posts Section */}
      <div className="mt-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
        {filteredCrisisList.map((item, index) => (
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

export default Crisis;
