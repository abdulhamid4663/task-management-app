import { Link, NavLink, Outlet } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardLayout = () => {
    const { user } = useAuth();

    return (
        <>
            <div className="lg:hidden drawer text-end py-2 px-4 bg-[#FAF8F7]">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn text-2xl"><GiHamburgerMenu /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 min-h-full bg-[#FAF8F7] text-base-content">
                        <div className="dropdown dropdown-bottom mb-4">
                            <div tabIndex={0} role="button" className="flex gap-3 items-center m-1">
                                <div className="w-8 rounded-full">
                                    <img alt={`${user?.displayName}'s Image`} src={user?.photoURL} className="rounded-full" />
                                </div>
                                <div>
                                    <h1>{user?.displayName.split(' ')[0]}</h1>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/dashboard/profile'>Profile</Link></li>
                                <li><a className="text-red-600">Logout</a></li>
                            </ul>
                        </div>
                        <NavLink to='/dashboard'
                            className={({ isActive }) =>
                                isActive
                                    ? "w-full flex items-center gap-2 mx-4 text-base"
                                    : "w-full flex items-center gap-2 mx-4 text-base"
                            }
                        >
                            <FaTasks className="lg:text-lg xl:text-xl" />
                            Task Management
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="hidden w-full max-w-[280px] lg:block bg-[#FAF8F7]">
                    <div className="flex px-2 flex-col justify-between min-h-screen h-full">
                        <div>
                            <div className="dropdown dropdown-bottom mb-4">
                                <div tabIndex={0} role="button" className="btn m-1">
                                    <div className="w-8 rounded-full">
                                        <img alt={`${user?.displayName}'s Image`} src={user?.photoURL} className="rounded-full" />
                                    </div>
                                    <div>
                                        <h1>{user?.displayName.split(' ')[0]}</h1>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                    <li><Link to='/dashboard/profile'>Profile</Link></li>
                                    <li><a className="text-red-600">Logout</a></li>
                                </ul>
                            </div>
                            <NavLink to='/dashboard'
                                className={({ isActive }) =>
                                    isActive
                                        ? "w-full flex items-center gap-2 mx-4 text-base"
                                        : "w-full flex items-center gap-2 mx-4 text-base"
                                }
                            >
                                <FaTasks className="lg:text-lg xl:text-xl" />
                                Task Management
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <Outlet />
                </div>
            </div >
        </>
    );
};

export default DashboardLayout;