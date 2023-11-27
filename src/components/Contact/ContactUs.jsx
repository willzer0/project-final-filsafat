import "./contacus.css";
function ContactUs() {
  return (
    <footer>
      <div className="footer" id="contact">
        <div className="logo">
          <a href="https://web.facebook.com/profile.php?id=100082571173139" target="_blank" rel="noreferrer" >
            <i className="logo-sosmed fab fa-facebook fa-2x" />
          </a>
          <a href="https://www.instagram.com/fakultasfilsafatofficial/" target="_blank" rel="noreferrer">
            <i className="logo-sosmed fab fa-instagram fa-2x" />
          </a>
          <a href="https://www.youtube.com/@fakultasfilsafatunklab3450" target="_blank" rel="noreferrer">
            <i className="logo-sosmed fab fa-youtube fa-2x" />
          </a>
        </div>
        <div className="row">
          <ul>
            <li>
            <a href="https://forms.gle/eQVSnDunFXc83V1D6" target="_blank" rel="noopener noreferrer">Contact Us</a>

            </li>
            <li>
              <a href="#portfolio">About Us</a>
            </li>
            <li>
              <a href="#about">History</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
           <li>
              <a href="#team">Lecture</a>
            </li>
          </ul>
          <div>
          This is our front-end class project. We utilized a combination of technologies including <strong>Vite, React, Bootstrap, and Firebase</strong> to build it. Our goal was to create a responsive and dynamic web application, leveraging the real-time database capabilities of Firebase. The use of Vite and React allowed us to create a fast, modern, and efficient single-page application, while Bootstrap helped us design a clean and user-friendly interface.
          </div>
        </div>
        {/* <div className="row">
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:
          Mahesh
        </div> */}
      </div>
    </footer>
  );
}

export default ContactUs;
