import { Link, useNavigate } from "react-router-dom";
import auth from "../../assets/images/auth/auth.webp"
import { FcGoogle } from "react-icons/fc";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {
    const { createUser, userUpdateProfile, googleLogin, loading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const imgFile = form.imgFile.files[0];
        const email = form.email.value;
        const password = form.password.value;

        try {
            const imageData = await imageUpload(imgFile)
            const res = await createUser(email, password);
            if (res?.user) {
                await userUpdateProfile(name, imageData?.data?.display_url)
                toast.success('user created successfully');
                navigate('/dashboard')
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    const handleGoogle = async () => {
        try {
            await googleLogin();
            toast.success('user has been logged in successfully');
            navigate('/dashboard')
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div>
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mt-16">Sign Up</h1>
            <div className="hero min-h-[80vh] bg-base-100">
                <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
                    <div className="w-full hidden lg:block">
                        <img src={auth} alt="" />
                    </div>
                    <div className="card w-full bg-base-100">
                        <div className="px-8">
                            <button onClick={handleGoogle} className="btn w-full">
                                <FcGoogle className="text-lg" />
                                Continue with Google
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input name="imgFile" type="file" className="file-input file-input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#B33E62] text-white">
                                    {
                                        loading ?
                                        <TbFidgetSpinner className="animate-spin mx-auto" /> : 'Sign Up with Email'
                                    }
                                </button>
                            </div>
                        </form>
                        <div className="px-8 text-sm">
                            <p>By continuing with Google, or Email, you agree to ToDo&apos;s <span className="underline font-semibold cursor-pointer hover:no-underline">Terms of Service</span> and <span className="underline font-semibold cursor-pointer hover:no-underline">Privacy Policy</span>.</p>
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-sm">Already signed up? <Link to='/login' className="font-bold hover:underline">Go to login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;