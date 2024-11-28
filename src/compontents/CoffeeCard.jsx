/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ data,coffees,setCoffees }) => {
    console.log(data)
    const { _id, name, quentaty, supplier, taste, category, details, photo } = data;
    const hendlDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete conferm');
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaing =coffees.filter(cof => cof._id !== _id);
                            console.log(remaing);
                            setCoffees(remaing)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-80">
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex w-full justify-between px-5 items-center">
                    <div>
                        <h2 className="card-title">Name {name}</h2>
                        <p>{quentaty}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-5">
                            <button className="btn join-item">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                            </Link>
                            <button onClick={() => hendlDelete(_id)} className="btn join-item bg-orange-500">x</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;