interface Props {
  address: string;
  image: string;
  hospitalName: string;
}

function Card({ address, image, hospitalName }: Props) {
  //we want to have this component represent a single card
  return (
    <div className="card">
      <div className="card-body">
        <div className="card_img">
          <img src={image} className="single-img h-100 w-100" alt="..." />

          <div className="card-img-overlay d-flex align-items-center align-content-center justify-content-center">
            <h5 className="card-title">{address}</h5>
          </div>
        </div>
        <h2 className="card-text d-flex justify-content-center">{address}</h2>
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
