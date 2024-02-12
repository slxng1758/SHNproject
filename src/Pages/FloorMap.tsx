import Message from "../Components/Message";
import TopNav from "../Components/TopNav";
import NavBar from "../Components/NavBar";
import FloorGroup from "../Components/FloorGroup";
import FloorMenu from "../Components/FloorMenu";
import Footer from "../Components/Footer";
import LatestCarousel from "../Components/LatestCarousel";

function FloorMap() {
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <FloorGroup />
        <FloorMenu/>
        <LatestCarousel />
        <Footer />
      </div>
    </div>
  );
}

export default FloorMap;
