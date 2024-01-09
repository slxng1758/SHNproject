interface Props {
  address: string;
  image: string;
  hospitalName: string;
}

function Card({ address, image, hospitalName }: Props) {
  //we want to have this component represent a single card
  return (
    <div className="card-body">
      <div className="card-body ml-3">
        <img src={image} className="d-block w-100 img-fluid" alt="..." />
        <p className="card-text">{address}</p>
        <div>
          <button
            type="button"
            className="btn btn-primary btn-lg "
            style={{
              backgroundColor: "#0078B6",
              display: hospitalName === "" ? "none" : "inline",
            }}
          >
            {hospitalName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
