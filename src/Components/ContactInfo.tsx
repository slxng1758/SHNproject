interface Props {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
}

function ContactInfo({ firstName, lastName, email, comment }: Props) {
  //we want to have this component represent a single card
  return (
    <div className="container-sm">
      <div className="row border">
        <div className="col-6 border d-inline-flex justify-content-end ">
          <div
            className="card-body w-50 p-3 m-5 text-center me-1"
            style={{ width: 400, backgroundColor: "#F0F0F0" }}
          >
            <p className="card-text">{firstName}</p>
          </div>
        </div>
        <div className="col-6 border">
          <div
            className="card-body p-3 m-5 text-center ms-3"
            style={{ width: 400, backgroundColor: "#F0F0F0" }}
          >
            <p className="card-text">{lastName}</p>
          </div>
        </div>
      </div>
      <div className="row border">
        <div className="col ">
          <div
            className="card-body p-3 m-5 text-center mx-auto"
            style={{ width: 800, backgroundColor: "#F0F0F0" }}
          >
            <p className="card-text">{email}</p>
          </div>
        </div>

        <div className="col">
          <div
            className="card-body p-3 m-5 text-center mx-auto"
            style={{
              width: 800,
              backgroundColor: "#F0F0F0",
              boxShadow: "20px 20px 1px 1px #013F8A",
            }}
          >
            <p className="card-text">{comment}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#0078B6",
            }}
          >
            <p>Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
