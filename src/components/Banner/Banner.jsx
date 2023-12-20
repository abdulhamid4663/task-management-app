import banner from "../../assets/images/banner/banner.avif"

const Banner = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center py-10 lg:py-0">
                <div className="lg:flex-1 text-center lg:text-start order-2 pt-6 lg:pt-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:max-w-2xl font-semibold">Master Your Tasks, Master Your Life</h1>
                    <p className="pt-3 text-sm md:text-base">Take control of your tasks and enhance your productivity with our intuitive task management platform. With our robust features, you can effectively organize, manage, and track your tasks, ensuring smooth workflow and uninterrupted progress towards your goals.</p>
                    <div className="pt-8">
                        <button className="btn text-[#B33E62] border-[#B33E62] rounded-3xl bg-transparent border-2 px-10 hover:bg-[#B33E62] hover:text-white">Let&apos;s Explore</button>
                    </div>
                </div>
                <div className="lg:flex-1 order-1">
                    <img src={banner} alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;