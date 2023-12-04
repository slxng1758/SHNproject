import Message from "../Components/Message";
import NavBar from "../Components/NavBar";
import FloorGroup from "../Components/FloorGroup";
import Footer from "../Components/Footer";

function FloorMap() {
  let message = "Welcome to North York General Hospital";
  return (
    <div>
      <div>
        <Message msg={message} />
        <NavBar />
        <FloorGroup />
        <Footer />
      </div>
    </div>
  );
}

export default FloorMap;
