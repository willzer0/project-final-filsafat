import foto1 from "../../assets/img/about/1.jpg";
import foto2 from "../../assets/img/about/2.jpg";
import foto3 from "../../assets/img/about/3.jpg";
import foto4 from "../../assets/img/about/4.jpg";

function History() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">History</h2>
          <h3 className="section-subheading text-muted" />
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={foto1} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">At Begining</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  1965 Klabat University (UNKLAB) was founded under the name
                  Klabat Higher Education (PTK) which is built and supervised by
                  the Seventh-day Adventist Church (GMAHK) through the Klabat
                  Higher Education Foundation. At first, This college was
                  founded to produce pastors and teachers who will serve the
                  needs specifically for GMAHK organizations in the provinces of
                  Sulawesi, Maluku, and Irian Jaya. Next Along with developments
                  GMAHK organization, felt the need to provide secretaries,
                  accountants, even graduate staff in agriculture, computers and
                  nursing as well necessary for regional and national
                  development. Moment founded, PTK opened a Two Year Diploma
                  (D2) study program for Theology and Elementary School
                  Education.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={foto2} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">PTK changes</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  When in 1970 PTK was changed to High School Klabat (STK) based
                  on the Decree of the Minister of Education and Culture Number
                  211/S/DPT/I/1970, a program was developed Four-Year
                  Baccalaureate for theology and study programs Middle School
                  Education and opened a D2 program for Secretary and Business
                  Administration study program or Commerce. Furthermore, the
                  Commerce study program was developed be a baccalaureate
                  program followed by a study program baccalaureate in English
                  Language Education and Religious Education to expand services
                  to meet community needs wider. Then in 1982 there was a change
                  from STK became Klabat University through a Ministerial Decree
                  Education and Culture No. 0184/0/1982.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={foto3} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Additional Faculty</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Complementing the existing Exact Faculty, in 1999 UNKLAB opens
                  a Faculty of Computer Science (FIK) with programs Information
                  Systems study. Currently UNKLAB has 1(one) Postgraduate
                  Program, 7 (seven) faculties and 1 (one) academy, that is; (1)
                  Postgraduate Master of Management (2) Faculty Economics
                  (FEKON), (3) Faculty of Philosophy, (4) Faculty of Teaching
                  and Education Sciences (FKIP), (5) Faculty of Nursing (6)
                  Faculty of Computer Science (FIK) (7) Faculty of Agriculture,
                  and (8) Klabat Secretarial Academy
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src={foto4} alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Implementation of Masters Level</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  On August 7 2019, an inauguration event took place Klabat
                  University Theology Masters Program is very good. And there
                  are 37 Theology master program students who have registered
                  and ready to take semester 1 lectures, TA 2019/2020. So with
                  the statement of God Master of Theology Unklab has been going
                  well so far.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default History;
