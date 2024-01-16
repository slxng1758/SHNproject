function Reminder() {
  return (
    <div className="card-body p-3 m-5 text-center" style={{ width: 400,backgroundColor: "#F0F0F0" }}>
      <p className="card-text">
        For specific medicial information and latest updates visit the
      </p>
      <button
        type="button"
        className="btn btn-primary btn-lg "
        style={{ backgroundColor: "#0078B6" }}
      >
        Official SHN Website
      </button>
    </div>
  );
}
export default Reminder;
