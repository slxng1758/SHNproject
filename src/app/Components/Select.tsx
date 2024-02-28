function Select() {
  return (
    <div
      className="row m-5"
      style={{
        backgroundColor: "#F0F0F0",
        boxShadow: "20px 20px 1px 1px #013F8A",
        borderRadius: 10,
        borderColor: "black",
      }}
    >
      <h1>Select a location to view a detailed layout</h1>
      <div className="col-sm-4">
        <div className="card-body ml-3">
          <img
            src="./src/assets/birchmount.png"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <p className="card-text">
            3030 Birchmount Rd, Scarborough, ON M1W 3W3, Canada
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg "
            style={{ backgroundColor: "#0078B6" }}
          >
            Birchmount Hospital
          </button>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card-body ml-3">
          <img
            src="./src/assets/centenary.png"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <p className="card-text">
            2867 Ellesmere Rd, Scarborough, ON M1E 4B9, Canada
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg "
            style={{ backgroundColor: "#0078B6" }}
          >
            Centenary Hospital
          </button>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card-body ml-3">
          <img
            src="./src/assets/general.png"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <p className="card-text">
            3050 Lawrence Ave E, Scarborough, ON M1P 2V5, Canada
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg "
            style={{ backgroundColor: "#0078B6" }}
          >
            General Hospital
          </button>
        </div>
      </div>
    </div>
  );
}
export default Select;
