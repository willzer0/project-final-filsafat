import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
// import axios from "axios";

import "../../styles/aos.css";
import Aos from "aos";



function VisiMisi() {
  const [misi, setMisi] = useState("");
  const [visi, setVisi] = useState("");

  useEffect(() => {
    Aos.init();
    const db = getDatabase();
    const featuresRef = ref(db, "visimisi/");
    onValue(featuresRef, (snapshot) => {
      const data = snapshot.val();
      // if (data) {
      setMisi(data.misi);
      setVisi(data.visi);

      // console.log(data);
      // }
    });
    // axios
    //   .get("http://localhost:3000/profile")
    //   .then((res) => setFeatures(res.data));
  }, []);
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row text-center ">
          {" "}
          <center>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
              <h4 className="my-3">Mission</h4>
              <p className="text-muted">{misi} </p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={180}>
              <h4 className="my-3">Vission</h4>
              <p className="text-muted">{visi} </p>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}

export default VisiMisi;
