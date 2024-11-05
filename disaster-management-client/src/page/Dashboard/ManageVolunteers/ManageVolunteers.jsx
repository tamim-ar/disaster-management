import Swal from 'sweetalert2';
import useUser from '../../../hooks/useUser';

const ManageVolunteers = () => {
    const { data, refetch } = useUser();
    console.log(data);
  
    const handelTask= (role, u) => {
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
            `http://localhost:5000/users/${u._id}`,
            {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ role, enroll: 0 }),
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
  
    return (
      <div className="w-11/12 mx-auto">
        <h3 className="text-4xl text-center font-semibold my-4">
          Total Users: {data.length}
        </h3>
  
        <div className="overflow-x-auto mt-8">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="bg-teal-950 text-white">
              <tr>
                <th className="font-bold text-base">#</th>
                <th className="font-bold text-base">Name</th>
                <th className="font-bold text-base">Email</th>
                <th className="font-bold text-base">Role</th>
                <th className="font-bold text-base">Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((u, index) => (
                <tr key={u._id}>
                  <th>{index + 1}</th>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <button
                      onClick={() => handelTask("volunteer", u)}
                      className="btn btn-info"
                    >
                      Make Admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageVolunteers;