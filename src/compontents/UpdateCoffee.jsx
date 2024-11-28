import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffeUpdate =useLoaderData();
    console.log(coffeUpdate)
    return (
        <div>
            <h2>update coffee</h2>
        </div>
    );
};

export default UpdateCoffee;