
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Review = () => {

   
    


    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://homez-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <section className="my-40">
            <SectionTitle

                heading={'Client Reviews'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center max-w-5xl">

                {
                    reviews.map(review => <SwiperSlide key={review._id} >
                        <div>

                            <p className='max-w-4xl mx-auto'>{review.details}</p>
                            <h1 className="text-3xl text-yellow-500">{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='max-w-5xl mx-auto my-20'>
                <div className="join w-full">
                    <input className="input w-full input-bordered join-item" placeholder="Add Your Valuable Review" />
                    <button  className="btn join-item rounded-r-full ">Submit</button>
                </div>

              
            </div>

          


        </section>
    );
};

export default Review;