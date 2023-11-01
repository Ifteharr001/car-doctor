import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheared/Footer/Footer";
import Navbar from "../Pages/Sheared/Navbar/Navbar";

const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;