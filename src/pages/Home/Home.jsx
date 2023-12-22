import Banner from "../../components/Banner/Banner";
import Benefit from "../../components/Benefit/Benefit";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Home/Navbar";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Banner />
            <Benefit />
            <Footer />
        </div>
    );
};

export default Home;