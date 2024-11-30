import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const userData = useLoaderData();
    console.log(userData)
    const [users, setUser] = useState(userData)
    return (
        <div>
            <h1 className="text-4xl text-center">Users {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user =><tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.createAte}</td>
                                <td>
                                    <button className="btn mx-3">Edit</button>
                                    <button className="btn">x</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;