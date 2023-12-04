import Message from "../Components/Message";
import NavBar from "../Components/NavBar";
import LatestCarousel from "../Components/LatestCarousel";
import Footer from "../Components/Footer";

function Home() {
  let message = "Welcome to North York General Hospital";
  return (
    <div>
      <div>
        <Message msg={message} />
        <NavBar />
        <LatestCarousel />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
