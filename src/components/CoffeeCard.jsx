import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, supplier, price } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        //start delete from here
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);

              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
            console.log(data, "after delete coffee");
          });
      }
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between p-6 border-2">
        {/* image */}
        <figure>
          <img src={photo} alt={name} />
        </figure>
        {/* coffee details */}
        <div className="">
          <h2 className="card-title">Name: {name}</h2>
          <p>Supplier: {supplier}</p>
          <p>Price: {price} taka</p>
        </div>
        {/* buttons */}
        <div>
          <div className="join join-vertical space-y-4">
            <Link to={`/coffee-details/${_id}`}>
              <button className="btn join-item text-success">View</button>
            </Link>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
