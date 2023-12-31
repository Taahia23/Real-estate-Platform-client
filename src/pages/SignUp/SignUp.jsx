import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";
import signUplogo from '../../assets/images/property/register.png'





const SignUp = () => {


    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic()



    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile updated');

                        const userInfo = {
                            name: data.name,
                            email: data.email,

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-start",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })



                    })
                    .catch(error => {
                        console.log(error);
                    })
            })

    }


    return (
        <>

           

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       <img src={signUplogo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} name="name" type="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photoURL", { required: true })} type="text" placeholder="PHOTO URL" className="input input-bordered" />
                                {errors.photoURL && <span>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email?.type === 'required' && <span>email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/ })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span>Password must have 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span>Password must less than 20  character</span>}
                                {errors.password?.type === 'pattern' && <span>Password must have one uppercase one lower case letter and special  character</span>}







                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-yellow-500" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p className="p-10">ALready have any account? please <Link className="text-yellow-600 font-bold" to={'/login'}>Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignUp;