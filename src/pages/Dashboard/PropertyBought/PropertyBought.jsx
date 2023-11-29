
import { Link } from "react-router-dom";
import useMakeOffer from "../../../hooks/useMakeOffer";

const PropertyBought = () => {
        const [makeOffer] = useMakeOffer()
        console.log(makeOffer);
       
    return (
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        makeOffer.map(item => <div key={item._id} className="card w-72 bg-base-100 shadow-xl mb-20">
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
                                <p>{item.location}blah</p>
                                <p>{item.priceRange}</p>
                                <p>{item.date}</p>
                                <p className="font-semibold text-blue-700">{item.verificationStatus}</p>
                                <div className="">
                                    <Link to={`/detail/${item._id}`}><button className="btn btn-primary btn-block">Detail</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
     
    );
};

export default PropertyBought;