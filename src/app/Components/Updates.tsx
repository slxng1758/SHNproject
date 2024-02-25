import { useEffect, useState } from "react";
import Reminder from "./Reminder";

function Updates() {
  //hook to retrive data from scrapper
  const [data, setData] = useState<any[]>([]);

  //fetch data
  useEffect(() => {
    fetch("http://localhost:4000/scrapeNews")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

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
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
      </div>
      <div>
        {data.map((news) => (
          <div key={news.title}>
            <p>{news.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Updates;
