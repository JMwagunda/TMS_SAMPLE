import {MdHomeWork} from "react-icons/md"
import {RiCheckboxMultipleBlankFill} from "react-icons/ri"
import {MdAddHome} from "react-icons/md"
import {MdPermContactCalender} from "react-icons/md"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
        <NavLink to={"/"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdHomeWork/>
        <div>Home</div>
        </NavLink>
        <NavLink to={"/listing"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <RiCheckboxMultipleBlankFill/>
        <div>Listing</div>
        </NavLink>
        <NavLink to={"/"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdPermContactCalender/>
        <div>Contact</div>
        </NavLink>
        <NavLink to={"/"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdAddHome/>
        <div>add property</div>
        </NavLink>
    </nav>
  )
}

export default Navbar