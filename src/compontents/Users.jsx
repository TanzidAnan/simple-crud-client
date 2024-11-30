import { useLoaderData } from "react-router-dom";

const Users = () => {
    const userData =useLoaderData();
    console.log(userData)
    return (
        <div>
            <h1 className="text-4xl text-center">Users</h1>
        </div>
    );
};

export default Users;