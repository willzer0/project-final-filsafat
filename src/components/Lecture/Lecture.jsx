import { useEffect, useState } from "react";
import axios from "axios";

function Lecture() {
  const [profile, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((res) => setFeatures(res.data));
  }, []);
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing People</h2>
          <h3 className="section-subheading text-muted">
            Preparing Ministers of the Gospel with Christlike Character to serve
            God and Humanity.
          </h3>
        </div>

        {/* // eslint-disable-next-line react/jsx-key */}
        <div className="row">
          {profile.map((item) => {
            return (
              <div className="col-lg-4" key={item.id}>
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={`/src/assets/img/team/${item.gambar}.jpg`}
                    alt="..."
                  />
                  <h4>{item.jabatan}</h4>
                  <p className="text-muted">{item.nama} </p>
                  {/* <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a> */}
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
              Memasukkan prinsip – prinsip Alkitab didalam setiap mata kuliah
              yang diajarkan untuk memacu iman yang arif di dalam Yesus Kristus.
              Melalui ajaran dan teladan, memacu para mahasiswa secara aktif
              mengakrabkan orang lain kepada Yesus Kristus atas dasar keyakinan
              karena aktifitas ini adalah tugas utama yang dikehendaki Yesus
              untuk diamalkan oleh setiap pengikut-Nya dalam rangka melaksanakan
              Amanat Agung – Nya. (Matius 4 : 19); (Matius 28 : 18 – 20).
              Mendorong perkembanan nilai – nilai kekristenan yang sejati di
              dalam diri para mahasiswa guna menjadi dasar keputusan – keputusan
              moral sebagai pengikut – pengikut Kristus. Memperkenalkan dan
              menekankan ajaran – ajaran, sejarah, dan misi global Gereja Masehi
              Advent Hari Ketujuh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lecture;
