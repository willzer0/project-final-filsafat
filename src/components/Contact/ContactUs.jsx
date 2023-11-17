function ContactUs() {
    return (
      <div className="row contact " id="contact" >
        <div className="col-md-7 d-print-none">
          <div className="my-2">
            <form action="https://formspree.io/f/mvojnggg" method="POST">
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="_replyto"
                    placeholder="Your E-mail"
                    required
                  />
                </div>
              </div>
              <div className="form-group my-2">
                <textarea
                  className="form-control"
                  style={{ resize: "none" }}
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="mt-2">
            <h3 className="h6">Address</h3>
            <div className="row">
              <div className="col-12 pb-2 pr-5 text-secondary">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                Bitung City, North Sulawesi, Indonesia
              </div>
            </div>
  
            <h3 className="h6">Phone</h3>
            <div className="pb-2 text-secondary">0857-1779-7065</div>
            <h3 className="h6">Email</h3>
            <div className="pb-2 text-secondary">andreasjeno23@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  