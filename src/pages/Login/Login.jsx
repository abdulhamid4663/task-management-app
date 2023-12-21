import { Link } from "react-router-dom";
import auth from "../../assets/images/auth/auth.webp"
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="text-center text-5xl font-semibold mt-16">Login</h1>
            <div className="hero min-h-[80vh] bg-base-100">
                <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
                    <div className="w-full hidden lg:block">
                        <img src={auth} alt="" />
                    </div>
                    <div className="card w-full bg-base-100">
                        <div className="px-8">
                            <button className="btn w-full">
                                <FcGoogle className="text-lg" />
                                Continue with Google
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#B33E62] text-white">Login</button>
                            </div>
                        </form>
                        <div className="px-8 text-sm">
                            <p>By continuing with Google, or Email, you agree to ToDo&apos;s <span className="underline font-semibold cursor-pointer hover:no-underline">Terms of Service</span> and <span className="underline font-semibold cursor-pointer hover:no-underline">Privacy Policy</span>.</p>
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-sm">Don&apos;t have an account? <Link to='/signUp' className="font-bold hover:underline">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="flex min-h-screen items-center justify-center">
        //     <div className="card w-full max-w-screen-sm bg-base-100">
        //         <form className="card-body">
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Email</span>
        //                 </label>
        //                 <input type="email" placeholder="email" className="input input-bordered" required />
        //             </div>
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Password</span>
        //                 </label>
        //                 <input type="password" placeholder="password" className="input input-bordered" required />
        //                 <label className="label">
        //                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //                 </label>
        //             </div>
        //             <div className="form-control mt-6">
        //                 <button className="btn btn-primary">Login</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    );
};

export default Login;