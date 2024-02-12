import Reminder from "./Reminder";

function Updates() {
  return (
    <div className="container-sm">
      <div className="row border d-flex">
        <div
          className="list-group p-3 me-auto col-6 border"
          style={{ width: 400 }}
        >
          <Reminder />
        </div>
        <div className="col-7 border d-flex">
          <div
            className="card-body"
            style={{
              backgroundColor: "#F0F0F0",
            }}
          >
            <button
              type="button"
              className="btn btn-primary btn-lg "
              style={{ backgroundColor: "#0078B6" }}
            >
              Birchmount
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg "
              style={{ backgroundColor: "#0078B6" }}
            >
              Centenary
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg "
              style={{ backgroundColor: "#0078B6" }}
            >
              General
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
