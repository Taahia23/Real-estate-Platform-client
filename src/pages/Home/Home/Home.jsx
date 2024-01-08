
import AdvertisementSection from "../AdvertisementSection/AdvertisementSection";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import HelpSection from "../HelpSection/HelpSection";
import TrustedSection from "../TrustedSection/TrustedSection";

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <HelpSection></HelpSection>
            <TrustedSection></TrustedSection>
            <FAQ></FAQ>
            
        </div>
    );
};

export default Home;