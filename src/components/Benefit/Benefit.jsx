import user from "../../assets/images/benefit/individual-user.png"
import developer from "../../assets/images/benefit/developer.webp"
import manager from "../../assets/images/benefit/managers.png"
import business from "../../assets/images/benefit/business.webp"
import education from "../../assets/images/benefit/education.webp"
import healthcare from "../../assets/images/benefit/healthcare.webp"

const Benefit = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-32">
            {/* Section Title */}
            <div className="text-center md:text-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">Who Can Benefit?</h1>
                <p className="max-w-screen-lg">Our task management platform is designed to cater to the diverse needs of individuals and professionals from various domains. It is a valuable tool for:</p>
            </div>

            {/* First */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-6 lg:mt-16 pb-6">
                <div className="flex lg:py-10 flex-col lg:px-20 justify-center order-2 md:order-1">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#BF3966]">Individual Users</h1>
                    <p className="pt-2">This platform assists individuals in efficiently managing personal tasks, deadlines, and priorities, thereby improving productivity and time management skills.</p>
                </div>
                <div className="order-1 md:order-2">
                    <img src={user} alt="" className="mx-auto" />
                </div>
            </div>
            {/* Second */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-6">
                <div>
                    <img src={developer} alt="" className="mx-auto" />
                </div>
                <div className="flex lg:py-10 flex-col lg:px-20 justify-center order-2">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#BF3966]">Developers and Programmers</h1>
                    <p className="pt-2">This platform assists developers and programmers in efficiently managing project tasks, deadlines, and workflows. It also offers a drag-and-drop functionality for task management.</p>
                </div>
            </div>
            {/* Third */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-6">
                <div className="flex lg:py-10 flex-col lg:px-20 justify-center order-2 md:order-1">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#BF3966]">Project Managers</h1>
                    <p className="pt-2">This platform enables project managers to effectively manage tasks across different projects, assign priorities, and track progress. It also facilitates team collaboration.</p>
                </div>
                <div className="order-1 md:order-2">
                    <img src={manager} alt="" className="mx-auto" />
                </div>
            </div>
            {/* Fourth */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-6">
                <div>
                    <img src={business} alt="" className="mx-auto" />
                </div>
                <div className="flex lg:py-10 flex-col lg:px-20 justify-center order-2">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#BF3966]">Businesses and Startups</h1>
                    <p className="pt-2">This platform helps businesses and startups manage daily tasks, set deadlines, and track progress, thereby enhancing productivity and efficiency.</p>
                </div>
            </div>
            {/* Fifth */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-6">
                <div className="flex lg:py-10 flex-col lg:px-20 justify-center order-2 md:order-1">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#BF3966]">Educational Institutions</h1>
                    <p className="pt-2">This platform assists educational institutions in managing tasks related to different courses or projects. It allows for task assignment, setting deadlines, and tracking progress.</p>
                </div>
                <div className="order-1 md:order-2">
                    <img src={education} alt="" className="mx-auto" />
                </div>
            </div>
            {/* Sixth */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-16">
                <div>
                    <img src={healthcare} alt="" className="mx-auto" />
                </div>
                <div className="flex lg:py-10 flex-col lg:px-20 justify-center order-2">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#BF3966]">Healthcare Professionals</h1>
                    <p className="pt-2">This platform assists healthcare professionals in managing tasks related to patient care, setting deadlines, and tracking progress.</p>
                </div>
            </div>
        </div>
    );
};

export default Benefit;