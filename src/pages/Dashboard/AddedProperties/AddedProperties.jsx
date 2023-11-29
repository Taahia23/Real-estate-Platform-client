import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useProperty from '../../../hooks/useProperty';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddedProperties = () => {
    const [property, ,refetch ] = useProperty();
    const axiosSecure =useAxiosSecure()


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

               
                axiosSecure.delete(`/property/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
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
            <SectionTitle heading={'My added Properties'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
                {
                    property.map(item => <div key={item._id} className="card w-72 bg-base-100 shadow-xl mb-20">
                        <figure><img className="w-72 h-60" src={item.propertyImg} alt="Shoes" /></figure>
                        <div className="card-body space-y-3">
                            <h2 className="card-title">{item.propertyTitle}</h2>
                            <div className="flex gap-5 justify-around">
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src='https://i.ibb.co/RPFMCNm/boy2.jpg' />
                                    </div>
                                </div>
                                <p>{item.agentName}</p>
                            </div>
                            <p>{item.location}</p>
                            <p>{item.priceRange}</p>
                            <p className="font-semibold text-blue-700">{item.verificationStatus}</p>
                            <div className="">
                                <Link to={`/dashboard/updateProperty/${item._id}`}><button className="btn btn-outline btn-primary mr-5">Update</button></Link>
                                <Link className="btn btn-outline btn-primary"><button onClick={() => handleDelete(item._id)}>Remove</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AddedProperties;