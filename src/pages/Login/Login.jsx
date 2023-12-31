import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../Components/SocialLogin";
import logInlogo from '../../assets/images/property/login.png'

const Login = () => {


    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password };

        console.log(user);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire("Validation successful!");
                // navigate(from, { replace: true })
                // navigate('/')
            })
            .then(data => {
                console.log(data);
            })
    }
    useEffect(()=>{
        const unsubscribe = setInterval(()=>{
            if(localStorage.getItem('access-token')) {
                navigate(from, { replace: true })
            }
        }, 200)

        return () => {clearInterval(unsubscribe)}
    },[navigate])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false)

        }
        else {
            setDisabled(true)
        }

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                      <img src={logInlogo} alt="" />
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} name="captcha" type="text" placeholder="type the text above" className="input input-bordered" required />


                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />

                            </div>
                        </form>
                        <p className="p-10">Do not have any account? please <Link className="text-blue-700 font-bold" to={'/signUp'}>Register</Link></p>

                        <SocialLogin></SocialLogin>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;