import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import "../../styles/aos.css";
import Aos from "aos";
function Masterhead() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
    Aos.init();
    const db = getDatabase();
    const historyRef = ref(db, "masterhead/");
    onValue(historyRef, (snapshot) => {
      const data = snapshot.val();
      setHeading(data.heading);
      // setGambar(data.gambar)
      setSubheading(data.subheading);
    });
  }, []);
    return (
      <header className="masthead">
        <div className="container"data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
          <div className="masthead-subheading">
            {subheading}
          </div>
          <div className="masthead-heading text-uppercase">
            {heading}
          </div>
          <a className="btn btn-warning btn-xl text-uppercase" href="#portfolio">
            More About Us
          </a>
        </div>
      </header>
    );
  }
  
  export default Masterhead;
  