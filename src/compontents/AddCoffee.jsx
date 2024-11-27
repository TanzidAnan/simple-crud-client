
const AddCoffee = () => {
    return (
        <div className="mt-10">


            <form className="bg-sky-100 w-10/12 mx-auto px-7 py-3 pb-10">
                <h1 className="text-3xl text-center text-black font-bold">Add coffee</h1>
                <div className="flex gap-4">
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Avable Quentaty</span>
                        </label>
                        <input type="text" name="quentaty" placeholder="Quentaty" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Quentaty" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;