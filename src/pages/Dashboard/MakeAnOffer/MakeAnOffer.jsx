import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const MakeAnOffer = () => {
    const singleProperty = useLoaderData();
    const { user } = useAuth()
    const { _id,propertyImg, propertyTitle, location, priceRange, agentName, } = singleProperty;
    console.log(singleProperty);




    const handleMakeOffer = e => {
        e.preventDefault();

        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;
        const propertyTitle = form.propertyTitle.value;
        const verificationStatus = form.verificationStatus.value;
        const date = form.date.value;
        const priceRange =form.priceRange.value;
        const propertyImg = form.propertyImg.value;
        const agentName = form.agentName.value;
        const location = form.location.value;

        // const priceRange = form.priceRange.value;


        const offeredProperty = {
            customerName: name,
            email,
            date,
            propertyTitle: propertyTitle,
            agentName: agentName,
            propertyId: _id,
            priceRange,
            verificationStatus: verificationStatus,
            propertyImg: propertyImg,

            location: location,


        }

        console.log(offeredProperty);

        fetch('https://homez-server.vercel.app/makeOffer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(offeredProperty)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Offer maked successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }



    return (
        <div>
            <SectionTitle heading={'Make an Offer'}></SectionTitle>
            <div>
                {/* form */}

                <div className='mb-40 '>

                    <div className="card top-20 left-3  flex-shrink-0 w-full max-w-4xl mx-auto shadow-2xl bg-base-100 p-5">

                        <form onSubmit={handleMakeOffer} className="card-body ">

                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2 b-2 ">



                                    <input type="text" placeholder='Verification Status' value={'pending'} className='border-b-2 border-pink-700 p-3' name="verificationStatus" id="" />

                                </div>


                                <div className="form-control md:w-1/2">

                                    <input type="date" name="date" id="" className='border-b-2 border-pink-700 p-3' />
                                </div>
                            </div>


                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2">

                                    <input type="text" placeholder='Property title' defaultValue={propertyTitle} className='border-b-2 border-pink-700 p-3' name="propertyTitle" id="" />
                                </div>


                                <div className="form-control md:w-1/2">

                                    <input type="text" placeholder={priceRange} className='border-b-2 border-pink-700 p-3' name="priceRange" id="" />
                                </div>
                            </div>



                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2">

                                    <input type="text" defaultValue={user?.displayName} placeholder='Name' className='border-b-2 border-pink-700 p-3' name="name" id="" />
                                </div>


                                <div className="form-control md:w-1/2">

                                    <input type="email" placeholder='Email' defaultValue={user?.email} className='border-b-2 border-pink-700 p-3' name="email" id="" />
                                </div>
                            </div>

                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2">

                                    <input type="text" placeholder='Agent Name' defaultValue={agentName} className='border-b-2 border-pink-700 p-3' name="agentName" id="" />
                                </div>


                                <div className="form-control md:w-1/2">

                                    <input type="text" placeholder='location' defaultValue={location} className='border-b-2 border-pink-700 p-3' name="location" id="" />

                                </div>
                            </div>
                            <div>
                                <div className="form-control md:w-full">

                                    <input type="text" placeholder='location' defaultValue={propertyImg} className='border-b-2 border-pink-700 p-3' name="propertyImg" id="" />

                                </div>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-primary text-white font-extrabold">Make Offer</button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* form */}
            </div>
        </div>
    );
};

export default MakeAnOffer;