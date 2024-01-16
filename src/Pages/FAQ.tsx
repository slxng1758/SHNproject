import Message from "../Components/Message";
import TopNav from "../Components/TopNav";
import NavBar from "../Components/NavBar";
import Reminder from "../Components/Reminder";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";

function FAQ() {
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <Faq
          question={"FAQ #1"}
          answer={"Answer"}
        />
        <Footer />
      </div>
    </div>
  );
}

export default FAQ;
