import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

// import axios from "axios";

import "../../styles/aos.css";
import Aos from "aos";

function Lecture() {
  const [profile, setLecture] = useState([]);

  useEffect(() => {
    Aos.init();
    const db = getDatabase();
    const featuresRef = ref(db, "lecturer/");
    onValue(featuresRef, (snapshot) => {
      const data = snapshot.val();
      // if (data) {
      setLecture(data);
      // }
    });
    // axios
    //   .get("http://localhost:3000/profile")
    //   .then((res) => setFeatures(res.data));
  }, []);
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Academic Leader</h2>
          <h3 className="section-subheading text-muted">
            Preparing Ministers of the Gospel with Christlike Character to serve
            God and Humanity.
          </h3>
        </div>
        {/* // eslint-disable-next-line react/jsx-key */}
        <div className="row">
          {profile.map((item) => {
            return (
              <div className="col-lg-4" key={item.id} data-aos="fade-up" data-aos-delay={200}>
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={item.gambar}
                    alt="..."
                  />
                  <h4>{item.jabatan}</h4>
                  <p className="text-muted">{item.nama} </p>
                  {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a> */}
                </div>
              </div>
            );
          })}
          <br />
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Preparing and training Ministers of the Gospel by building their
              personal qualities, knowledge, commitments, and skills vital to
              every minister of the Gospel.
              <br />
              <br />
              <br />
              Incorporate Biblical principles into every course which is taught
              to stimulate wise faith in Jesus Christ. Through teaching and
              example, actively encourage students to introduce others to Jesus
              Christ on the basis of faith because this activity is the main
              task desired by Jesus to be practiced by every one of His
              followers in order to carry it out His Great Commission. (Matthew
              4 : 19); (Matthew 28:18 – 20). Encourage the development of true
              Christian values in within students to become the basis for
              decisions morals as followers of Christ. Introducing and the
              pressure of the teachings, history and global mission of the
              Christian Church Seventh Day Advent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lecture;
