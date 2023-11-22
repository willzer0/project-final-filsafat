import { useEffect, useState } from "react";
import axios from "axios";

function VisiMisi() {
  const [visi_misi, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/visi_misi")
      .then((res) => setFeatures(res.data));
  }, []);
  return (
    <section className="page-section" id="services">
      <div className="container">
        {/* more */}
        {visi_misi.map((item) => {
          return (
            <div className="row text-center " key={item.id}>
              {" "}
              <center>
                <div className="col-md-4">
                  <h4 className="my-3">{item.judul}</h4>
                  <p className="text-muted">{item.isi} </p>
                </div>
              </center>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default VisiMisi;
