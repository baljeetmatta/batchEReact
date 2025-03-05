import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar=()=>{
   const navigate= useNavigate();

    return (
        <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <button className="bg-red-300 rounded-b-md text-white p-2" onClick={()=>{navigate("/login",{state:{data:20}})}}>Login</button>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
        </ul>
        </>
    )
}
export default Navbar;
