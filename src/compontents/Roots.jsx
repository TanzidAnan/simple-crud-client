import { Outlet } from "react-router-dom";
import Header from "./Header";

const Roots = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;