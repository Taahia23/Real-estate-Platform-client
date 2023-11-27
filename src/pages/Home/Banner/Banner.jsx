import { NavLink } from 'react-router-dom';
import bannerImg from '../../../assets/images/banner12.jpg'
const Banner = () => {
    return (
        <div>
            <div className='relative w-full'>
                <img className="w-full h-screen" src={bannerImg} alt="" />
                <div className="absolute h-full flex justify-center gap-10  left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="mt-36">
                        <p className="text-center text-sm md:text-lg text-white font-semibold  mt-10">THE BEST WAY TO</p>
                        <h2 className="text-3xl md:text-5xl lg:text-7xl  font-extrabold text-center text-white" data-aos="fade-up">Find the perfect place to </h2>
                        <h2 className="text-3xl md:text-5xl lg:text-7xl  font-extrabold text-center text-white mt-5" data-aos="fade-up">Live with your family</h2>

                        <p className="text-center text-sm md:text-lg text-white font-semibold  md:my-10">We’ve more than 745,000 apartments, place & plot. </p>
                        <NavLink to={''} className="flex justify-center mt-5"><div className="join">
                            <input className="input input-bordered join-item" placeholder="Search for properties...." />
                            <button className="btn join-item rounded-r-full">Search</button>
                        </div></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;