import Container from "../../../Components/Container/Container";
import a1 from '../../../assets/images/trusted/a1.jpg';
import a2 from '../../../assets/images/trusted/a2.jpg';
import a3 from '../../../assets/images/trusted/a3.jpg';
import a4 from '../../../assets/images/trusted/a4.jpg';
import a5 from '../../../assets/images/trusted/a5.jpg';
import a6 from '../../../assets/images/trusted/a6.jpg';
const TrustedSection = () => {
    return (
        <div className="my-40">
           
            <Container>
                <div className="space-y-20">
                <div>
                    <h1 className="text-2xl text-center text-blue-800 font-semibold">Trusted by the world’s best</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <img className="w-[100px]" src={a1} alt="" />
                    <img className="w-[100px]"  src={a2} alt="" />
                    <img className="w-[100px]"  src={a3} alt="" />
                    <img className="w-[100px]"  src={a4} alt="" />
                    <img className="w-[100px]"  src={a5} alt="" />
                    <img className="w-[100px]"  src={a6} alt="" />
                </div>
                </div>
            </Container>
            
        </div>
    );
};

export default TrustedSection;