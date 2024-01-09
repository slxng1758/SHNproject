import Message from "../Components/Message";
import TopNav from "../Components/TopNav";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

function Location() {
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <Message msg={"What specific location are you looking for today?"} />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card
                address={"Lobby"}
                image={
                  "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
                }
                hospitalName={""}
              />
            </div>
            <div className="col-sm">
              <Card
                address={"Check in"}
                image={
                  "https://images.pexels.com/photos/679277/pexels-photo-679277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
                }
                hospitalName={""}
              />
            </div>
            <div className="col-sm">
              <Card
                address={"Washroom"}
                image={
                  "https://images.pexels.com/photos/5486/bird-s-eye-view-cars-crossing-crossroad.jpg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
                }
                hospitalName={""}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Location;
