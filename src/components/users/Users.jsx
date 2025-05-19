import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { auth } from "../../Firebase/firebase.config";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  console.log(users);

  const user = auth.currentUser
  console.log(user);

  const handleDelete = (id) => {
    console.log(id, "this item has gone");

    //delete from db
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "this guy is out from list");
            if (data.deletedCount) {
                const remainingUsers = users.filter(user => user._id!==id)
                setUsers(remainingUsers)
              Swal.fire({
                title: "Deleted!",
                text: "User kick out successfully.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <th>
                  <button className="btn btn-xs text-success">View</button>
                  <button className="btn btn-xs">Edit</button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs text-red-600"
                  >
                    Del
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
