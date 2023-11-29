import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProperty = () => {



    const { register, handleSubmit, reset } = useForm()
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
            const propertyRes = await axiosSecure.post('/property', propertyItem)
            console.log(propertyRes.data);
            if (propertyRes.data.insertedId) {
                reset()
                // show success popup
                Swal.fire("Property Added successfully!");
            }
        }
        console.log('with image url', res.data);
    }




    return (
        <div>
            <SectionTitle heading={'Add Property'} subHeading={"What's new"}></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Property Title</span>

                        </div>
                        <input {...register("propertyTitle")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">
                        {/* location */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Location</span>

                            </div>
                            <input {...register("location")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/* location */}
                        {/*  price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">priceRange</span>

                            </div>
                            <input {...register("priceRange")} type="number" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/*  price */}
                    </div>

                    <div className="flex gap-5">
                        {/* agent name */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Agent name</span>

                            </div>
                            <input {...register("agentName")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/* agent name */}
                        {/*  agent email */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">agent email</span>

                            </div>
                            <input {...register("agentEmail")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/*  price */}
                    </div>
                   
                    <div className="form-control w-full ">  <label className="form-control">
                        <div className="label">
                            <span className="label-text">Description</span> </div>
                        <textarea  {...register("description")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label></div>

                    <div className="form-control w-full ">  <input  {...register("propertyImg")} type="file" className="file-input w-full max-w-xs" /></div>

                    <button className="btn btn-primary btn-wide">Add Property</button>

                </form>
            </div>
        </div>
    );
};

export default AddProperty;