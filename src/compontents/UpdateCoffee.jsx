import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffe = useLoaderData();
    const { _id, name, quentaty, supplier, taste, category, details, photo } = coffe;

    const hendleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quentaty = form.quentaty.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const UpdateCoffee = { name, quentaty, supplier, taste, category, details, photo }

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'success',
                        text: 'coffee update successfull',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div>
            <h2>update coffee {name}</h2>

            <div className="mt-10">
                <form onSubmit={hendleUpdateCoffee} className="bg-sky-100 w-10/12 mx-auto px-7 py-3 pb-10">
                    <h1 className="text-3xl text-center text-black font-bold">Update coffee {name}</h1>
                    <div className="flex gap-4">
                        <div className="form-control w-[50%]">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-[50%]">
                            <label className="label">
                                <span className="label-text">Avable Quentaty</span>
                            </label>
                            <input type="text" name="quentaty" defaultValue={quentaty} placeholder="Quentaty" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-[50%]">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-[50%]">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-[50%]">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-[50%]">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder="Quentaty" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-[100%]">
                            <label className="label">
                                <span className="label-text">photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="photo" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        {/* <button className="btn ">Add Coffee</button> */}
                        <input className="btn btn-block mt-5" type="submit" value="add coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;