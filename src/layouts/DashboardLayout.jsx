import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-2">
                SideBar
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;