import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function Masterhead() {
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  // const [gambar, setGambar] = useState("");

  useEffect(() => {
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
        <div className="container">
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
  