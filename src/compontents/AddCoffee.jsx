
const AddCoffee = () => {
    return (
        <div>


            <form className="bg-sky-500 w-10/12 mx-auto px-7 py-3">
                <h1 className="text-3xl text-center text-black">add coffee</h1>
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
            </form>
        </div>
    );
};

export default AddCoffee;