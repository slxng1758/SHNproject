import Message from "../Components/Message";
import TopNav from "../Components/TopNav";
import NavBar from "../Components/NavBar";
import LatestCarousel from "../Components/LatestCarousel";
import Footer from "../Components/Footer";
import Select from "../Components/Select";

function Home() {
  return (
    <div>
      <div>
        <TopNav/>
        <NavBar />
        <Select/>
        <LatestCarousel />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
