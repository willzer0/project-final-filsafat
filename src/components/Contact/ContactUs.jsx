import './contacus.css'
function ContactUs() {

  return (
    <footer>
      <div className="footer" id="contact">
        <div className="logo">
          <a href="https://web.facebook.com/profile.php?id=100082571173139" target="_blank" rel="noreferrer">
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
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
          {/* <div>
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:
          Mahesh
          </div> */}
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
