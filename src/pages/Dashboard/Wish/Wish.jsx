import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useWishItem from "../../../hooks/useWishItem";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Wish = () => {
    const [wish, refetch] = useWishItem();
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/wishes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }




    return (
        <div>
            <div>
                <SectionTitle heading={'My Wishlist'}></SectionTitle>
                <h2 className="text-3xl text-center text-blue-700 font-semibold">Total  : {wish.length}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24">
                {
                    wish.map(item => <div key={item._id} className=" w-80 bg-base-100 shadow-xl mb-20">
                        <figure><img className="rounded-t-3xl w-80 h-52" src={item.propertyImg} alt="Shoes" /></figure>
                        <div className="card-body bg-pink-50 space-y-1">
                            <h2 className="card-title">{item.propertyTitle}</h2>
                            <div className="">
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src='https://i.ibb.co/RPFMCNm/boy2.jpg' />
                                    </div>
                                </div>
                                <p><span className="font-semibold">agent: </span> {item.agentName}</p>
                            </div>
                            <p>{item.location}</p>
                            <p>{item.priceRange}</p>
                            <p className="font-semibold text-blue-700">{item.verificationStatus}</p>
                            <div className="">
                                <Link to={`/dashboard/makeAnOffer/${item.propertyId}`}><button className="btn btn-outline btn-primary mr-5">Make an Offer</button></Link>
                                <Link className="btn btn-outline btn-primary"><button onClick={()=>handleDelete(item._id)}>Remove</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Wish;