import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateProperty = () => {
    const {propertyImg, propertyTitle, location, description,agentEmail, agentName, priceRange, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()



    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.propertyImg[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const propertyItem = {
                propertyTitle: data.propertyTitle,
                location: data.location,
                priceRange: parseFloat(data.priceRange),
                agentName: data.agentName,
                agentEmail: data.agentEmail,
                description: data.description,
                propertyImg: res.data.data.display_url,
            }
            const propertyRes = await axiosSecure.patch(`/property/${_id}`, propertyItem)
            console.log(propertyRes.data);
            if (propertyRes.data.modifiedCount>0) {
                // reset()
                // show success popup
                Swal.fire("Property updated successfully!");
            }
        }
        console.log('with image url', res.data);
    }


    return (
        <div>
            <SectionTitle heading={'Update Property'}></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Property Title</span>

                        </div>
                        <input defaultValue={propertyTitle} {...register("propertyTitle")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">
                        {/* location */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Location</span>

                            </div>
                            <input defaultValue={location} {...register("location")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/* location */}
                        {/*  price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">priceRange</span>

                            </div>
                            <input defaultValue={priceRange} {...register("priceRange")} type="number" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/*  price */}
                    </div>

                    <div className="flex gap-5">
                        {/* agent name */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Agent name</span>

                            </div>
                            <input defaultValue={agentName} {...register("agentName")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/* agent name */}
                        {/*  agent email */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">agent email</span>

                            </div>
                            <input defaultValue={agentEmail} {...register("agentEmail")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/*  price */}
                    </div>

                    <div className="form-control w-full ">  <label className="form-control">
                        <div className="label">
                            <span className="label-text">Description</span> </div>
                        <textarea defaultValue={description}  {...register("description")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label></div>

                    <div defaultValue={propertyImg} className="form-control w-full ">  <input  {...register("propertyImg")} type="file" className="file-input w-full max-w-xs" /></div>

                    <button className="btn btn-primary btn-wide">Update Property</button>

                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;