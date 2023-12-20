import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <NavLink className="hover:text-violet-600 border-violet-600">
            Home
        </NavLink>
        <NavLink className="hover:text-violet-600">
            Features
        </NavLink>
        <NavLink className="hover:text-violet-600">
            About us
        </NavLink>
        <NavLink className="hover:text-violet-600">
            Contact us
        </NavLink>
    </>

    return (
        <div className="navbar bg-base-100 max-w-screen-2xl mx-auto py-6 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-violet-600 text-3xl font-semibold">ToDo.</Link>
            </div>
            <div className="navbar-end hidden lg:flex gap-6">
                <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
                    {navLinks}
                </ul>
                <div>
                    <button className="btn text-violet-600 border-violet-600 rounded-3xl bg-transparent border-2 px-10">Login in</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;