import Message from "../Components/Message";
import TopNav from "../Components/TopNav";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Reminder from "../Components/Reminder";
import Card from "../Components/Card";

function Home() {
  return (
    <div>
      <TopNav />
      <NavBar />
      <div
        className="row m-5"
        style={{
          backgroundColor: "#F0F0F0",
          boxShadow: "20px 20px 1px 1px #013F8A",
        }}
      >
        <Message msg={"Select a hospital location to view a detailed layout"} />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card
                address={"3030 Birchmount Rd, Scarborough, ON M1W 3W3, Canada"}
                image={"./src/assets/birchmount.png"}
                hospitalName={"Birchmount Hospital"}
              />
            </div>
            <div className="col-sm">
              <Card
                address={"2867 Ellesmere Rd, Scarborough, ON M1E 4B9, Canada"}
                image={"./src/assets/centenary.png"}
                hospitalName={"Centenary Hospital"}
              />
            </div>
            <div className="col-sm">
              <Card
                address={"3050 Lawrence Ave E, Scarborough, ON M1P 2V5, Canada"}
                image={"./src/assets/general.png"}
                hospitalName={"General Hospital"}
              />
            </div>
          </div>
        </div>
      </div>
      <Reminder />
      <Footer />
    </div>
  );
}

export default Home;
