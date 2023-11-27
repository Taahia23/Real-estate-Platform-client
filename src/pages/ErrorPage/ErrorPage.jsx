
import { NavLink } from 'react-router-dom';
import pageNotFound from '../../assets/images/property/pnf.jpg'


const ErrorPage = () => {
    return (
        <div className="w-full relative">
            <img className=" w-full h-[700px]" src={pageNotFound} alt="" />
            <div className='absolute bottom-[200px] right-[470px]'>
                <NavLink to={"/"}> <button className='btn btn-active btn-neutral'>Back To Home</button></NavLink>
            </div>

        </div>
    );
};

export default ErrorPage;