import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const userData =useLoaderData();
    console.log(userData)
    const [user,setUser] =useState(userData)
    return (
        <div>
            <h1 className="text-4xl text-center">Users {user.length}</h1>
        </div>
    );
};

export default Users;