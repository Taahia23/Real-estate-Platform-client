
import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useProperty from "../../../hooks/useProperty";
import { Link } from "react-router-dom";

const AdvertisementSection = () => {
    const [property] = useProperty();
    const popularProperty = property.filter(item => item.category === "popular")

    // const [property, setProperty] = useState([])

    // useEffect(() => {
    //     fetch('property.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularProperty = data.filter(item => item.category === "popular")
    //             setProperty(popularProperty);
    //         })
    // }, [])


    return (
        <div className="my-32">
            <Container>
                <div className="mb-20">
                    <SectionTitle
                    heading={'Discover Popular Properties'}
                    subHeading={'Let’s find the right'}
                    ></SectionTitle>
                    <h1 className="text-5xl font-semibold text-center"></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
                    {
                        popularProperty.map(item => <div key={item._id} className="card w-72 bg-base-100 shadow-xl">
                            <figure><img className="w-72 h-60" src={item.propertyImg} alt="Shoes" /></figure>
                            <div className="card-body space-y-3">
                                <h2 className="card-title">{item.location}</h2>
                                <p>{item.priceRange}</p>
                                <p className="font-semibold text-blue-700">{item.verificationStatus}</p>
                                <div className="">
                                    <Link  to={`/detail/${item._id}`}><button className="btn btn-primary btn-block">Detail</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
               <Link to={'/allProperties'}> <button className="btn btn-block my-10 bg-blue-600 text-white">View All Properties...</button></Link>
            </Container>

        </div>
    );
};

export default AdvertisementSection;