import Message from "../Components/Message";
import TopNav from "../Components/TopNav";
import NavBar from "../Components/NavBar";
import LatestCarousel from "../Components/LatestCarousel";
import Footer from "../Components/Footer";
import ContactInfo from "../Components/ContactInfo";
import Reminder from "../Components/Reminder";

function ContactUs() {
  return (
    <div>
      <div>
        <TopNav/>
        <NavBar />
        <Reminder/>
        <ContactInfo
        firstName = {"First Name"}
        lastName = {"Last Name"}
        email = {"Enter your email"}
        comment = {"Enter a comment, suggestion, or question"}
        />
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
