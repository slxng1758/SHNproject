function Reminder() {
  return (
    <div>
      <div
        className="card-body p-3 m-5 text-center"
        style={{ width: 250, backgroundColor: "#F0F0F0" }}
      >
        <p className="card-text">
          For specific medicial information and latest updates visit the
        </p>
        <a
          role="button"
          href="https://www.shn.ca/"
          className="btn btn-primary btn-lg"
          style={{ backgroundColor: "#0078B6" }}
        >
          Official SHN Website
        </a>
      </div>
      <div
        className="card-body p-3 m-5 text-center"
        style={{ width: 250, backgroundColor: "#CDDEF2" }}
      >
        <p className="card-text">website blurb</p>
        <a
          role="button"
          href="https://shnfoundation.akaraisin.com/ui/DonateNow/donations/start"
          className="btn btn-primary btn-lg "
          style={{ backgroundColor: "#0078B6" }}
        >
          Donate Today
        </a>
      </div>
    </div>
  );
}
export default Reminder;
