import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useWishItem from "../../hooks/useWishItem";

const DetailProperty = () => {
    const singleProperty = useLoaderData();
    const{user} = useAuth()
    const { _id, propertyTitle, propertyImg, location, priceRange, agentName, description, agentImg, verificationStatus } = singleProperty;
    const axiosSecure = useAxiosSecure()
    console.log(_id);
    const [, refetch]= useWishItem()

    const handleMyWishList = () => {
      
        const wishItem  = {
            propertyId : _id,
            email: user.email,
            propertyTitle,
            propertyImg,
            agentImg,
            agentName,
            location,
            priceRange,
            verificationStatus
        }
        axiosSecure.post('/wishes', wishItem)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire("Item added successfully!");
            }
            refetch()
        })
    }

    return (
        <div>
            <div key={_id} className="card  bg-base-100 shadow-xl p-24">
                <figure><img className="w-1/3" src={propertyImg} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{propertyTitle}</h2>


                    <p className=" my-5">{description} </p>
                    {/* <h2 className="card-title text-lg">Cook Email: {user?.email}</h2> */}
                    <h2 className="card-title text-lg">Location : <span className="text-blue-700">{location}</span></h2>
                    <h2 className="card-title text-lg">Agent Name : <span className="text-blue-700"> {agentName}</span> </h2>
                    <h1 className="card-title text-lg mb-7">Price : <span className="text-3xl font-extrabold text-red-700">{priceRange}</span></h1>

                    <div className="card-actions justify-start">
                        {/* <button className="btn btn-primary font-extrabold">Add to Cart</button> */}
                        <Link >
                            <button onClick={handleMyWishList} className="btn btn-primary font-extrabold btn-wide">Add to wishlist</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default DetailProperty;