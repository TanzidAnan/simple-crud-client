
const Home = () => {

    const hendleAddUsers =(e) =>{
        e.preventDefault();
        const form =e.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        const users ={name,email,password}
        console.log(users)
    }


    return (
        <div>
            <h1>simple user crud</h1>

                <form onSubmit={hendleAddUsers} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">User</button>
                    </div>
                </form>
        </div>
    );
};

export default Home;