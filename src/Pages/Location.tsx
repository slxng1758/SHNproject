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
        <div className="container-lg border">
          <div className="row">
            <div className="col-3 ">
              <Card
                address={"Lobby"}
                image={"./src/assets/toronto (1).jpg"}
                hospitalName={""}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Check in"}
                image={"./src/assets/toronto (2).jpg"}
                hospitalName={""}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Washroom"}
                image={"./src/assets/toronto (3).jpg"}
                hospitalName={""}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Doctor's Office"}
                image={"./src/assets/toronto (4).jpg"}
                hospitalName={""}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card
                address={"Labs"}
                image={"./src/assets/toronto (5).jpg"}
                hospitalName={""}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Cafeteria"}
                image={"./src/assets/toronto (6).jpg"}
                hospitalName={""}
              />
            </div>
            <div className="col-3">
              <Card
                address={"EMS Room"}
                image={"./src/assets/toronto (7).jpg"}
                hospitalName={""}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Bed Rooms"}
                image={"./src/assets/toronto (8).jpg"}
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
