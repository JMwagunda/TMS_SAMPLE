import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
const Header = () => {
  return (
    <header className="max-pad-container fixed top-1 w-full left-0 right-o z-50">
        <div className="max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5">
            <div className="flexBetween py-3">
                <Link to={'/'}>
                    <span className='font-[900] text-[24px]'>TechX<span className='font-[600] medium-20'>Web</span></span>
                </Link>
                <div className="flexCenter gap-x-4">
                    <Navbar/> 
                    <Navbar/> 
                </div>
                <div>
                    buttons & icons
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header