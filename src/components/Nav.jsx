import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return ( 
        <div className="nav flex justify-evenly gap-12 ">
            <NavLink style={({isActive}) => ({color: isActive && 'red'})} to="/" >Home</NavLink>
            <Link to="/instructors" >Instructors</Link>
            <Link to="/instructors" >Instructors</Link>
            <NavLink style={({isActive}) => ({color: isActive && 'red'})} to="/contact" >Contact</NavLink>
        </div>
     );
}
 
export default Nav;