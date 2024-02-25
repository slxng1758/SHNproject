import Message from "../app/Components/Message";
import TopNav from "../app/Components/TopNav";
import NavBar from "../app/Components/NavBar";
import Reminder from "../app/Components/Reminder";
import Footer from "../app/Components/Footer";
import Faq from "../app/Components/Faq";

function Site() {
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <Site />
        <Footer />
      </div>
    </div>
  );
}

export default Site;
