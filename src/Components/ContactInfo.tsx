interface Props {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
}

function ContactInfo({ firstName, lastName, email, comment }: Props) {
  //we want to have this component represent a single card
  return (
    <div className="card-body">
      <div
        className="card-body p-3 m-5 text-center"
        style={{ width: 400, backgroundColor: "#F0F0F0" }}
      >
        <p className="card-text">{firstName}</p>
      </div>
      <div
        className="card-body p-3 m-5 text-center"
        style={{ width: 400, backgroundColor: "#F0F0F0" }}
      >
        <p className="card-text">{lastName}</p>
      </div>
      <div
        className="card-body p-3 m-5 text-center"
        style={{ width: 800, backgroundColor: "#F0F0F0" }}
      >
        <p className="card-text">{email}</p>
      </div>

      <div
        className="card-body p-3 m-5 text-center"
        style={{
          width: 800,
          backgroundColor: "#F0F0F0",
          boxShadow: "20px 20px 1px 1px #013F8A",
        }}
      >
        <p className="card-text">{comment}</p>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg "
          style={{
            backgroundColor: "#0078B6",
          }}
        >
          <p>Submit</p>
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;
