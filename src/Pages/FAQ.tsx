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
        <Reminder />
        <Faq
          question={"FAQ #1"}
          answer={"Answer"}
        />
        <Faq
          question={"FAQ #2"}
          answer={"Answer 2"}
        />
        <Footer />
      </div>
    </div>
  );
}

export default FAQ;
