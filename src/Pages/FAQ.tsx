import Message from "../app/Components/Message";
import TopNav from "../app/Components/TopNav";
import NavBar from "../app/Components/NavBar";
import Reminder from "../app/Components/Reminder";
import Footer from "../app/Components/Footer";
import Faq from "../app/Components/Faq";

function FAQ() {
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <Reminder />
        <Faq question={"FAQ #1"} answer={"Answer"} />
        <Faq question={"FAQ #2"} answer={"Answer 2"} />
        <Footer />
      </div>
    </div>
  );
}

export default FAQ;
