import { useEffect } from "react";
import Swal from "sweetalert2";
import useCrises from "../../../hooks/userCrises";

const ManageCrises = () => {
    
  const { data, refetch } = useCrises();
  useEffect(() => {
    refetch();
  })

  const handelApprove = (status, crisis) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/crises/${crisis._id}`,
          {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  console.log(data);
    return (
        
    <div className="w-11/12 mx-auto">
    <h3 className="text-4xl text-center font-semibold my-4">
      Total Crisis: {data.length}
    </h3>

    <div className="overflow-x-auto mt-8">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead className="bg-teal-950 text-white">
          <tr>
            <th className="font-bold text-base">#</th>
            <th className="font-bold text-base">Topic</th>
            <th className="font-bold text-base">Issue</th>
            <th className="font-bold text-base">Location</th>
            <th className="font-bold text-base">Effect</th>
            <th className="font-bold text-base">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crisis, index) => (
            <tr key={crisis._id}>
              <th>{index + 1}</th>
              <td>{crisis.topicName}</td>
              <td>{crisis.issueName}</td>
              <td>{crisis.location}</td>
              <td>{crisis.effect}</td>
              <td>
                
                  {
                    crisis.status === 'approve' ? "Approved" : <button
                    onClick={() => handelApprove("admin", crisis)}
                    className="btn btn-info"
                  > Pending</button>
                  }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    );
};

export default ManageCrises;