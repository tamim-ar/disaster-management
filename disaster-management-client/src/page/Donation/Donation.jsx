import { useState } from "react";
import Swal from "sweetalert2";

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState();
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [totalAmount, setTotalAmount] = useState(0); // State to track total donation amount in BDT

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", {
      donorName,
      email,
      donationAmount,
      message,
    });
    setTotalAmount(totalAmount + parseFloat(donationAmount)); // Add the donation amount to total

    fetch("http://localhost:5000/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        donorName,
        email,
        donationAmount: parseInt(donationAmount),
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Donate Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Donation created:", data);
      })

    // Reset form fields
    setDonorName("");
    setEmail("");
    setDonationAmount("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
        <p className="text-center mb-4 text-gray-600">
          Total Donation Amount: <span className="font-bold">BDT {totalAmount.toFixed(2)}</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label font-semibold">Name</label>
            <input
              type="text"
              className="form-control border-gray-300 rounded-lg p-2 mt-1 w-full"
              placeholder="Your Name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label font-semibold">Email</label>
            <input
              type="email"
              className="form-control border-gray-300 rounded-lg p-2 mt-1 w-full"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label font-semibold">Donation Amount (BDT)</label>
            <input
              type="number"
              className="form-control border-gray-300 rounded-lg p-2 mt-1 w-full"
              placeholder="Amount in BDT"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="form-label font-semibold">Message (Optional)</label>
            <textarea
              className="form-control border-gray-300 rounded-lg p-2 mt-1 w-full"
              placeholder="Leave a message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold rounded-lg py-2 transition-all hover:bg-indigo-600"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
