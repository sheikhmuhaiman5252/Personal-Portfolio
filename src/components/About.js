const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                Expert Shopify Developer | Custom Themes, Stores &amp; Speed Optimization
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="demo/img/about-2.png" alt="image" />
              <div className="nav social-icon">
                {/* <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a> */}
                <a target="_blank" href="https://linkedin.com/in/shaykh-abdul-muhaiman-3ab519266">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>I’M Shaykh Abdul Muhaiman</h4>
              <h6>
                An Expert <span className="theme-color">Shopify &amp; Web Developer</span>{" "}
                based in <span className="theme-color">Pakistan</span>
              </h6>
              <p>
                I build fast, modern, and fully customized Shopify stores that boost
                performance and sales. From design to development, I craft clean,
                responsive, and high-converting websites that help brands stand out online.
              </p>

              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Birthday</label>
                    <p>16th December 2004</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>21 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>Pakistan</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>Faisalabad, Pakistan</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>sheikhmuhaiman@gmail.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>+92 302-7667774</p>
                  </div>
                  <div className="media">
                    <label>Skype</label>
                    <p>Shaykh Abdul Muhaiman</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" href="/demo/pdf/Abdul Muhaiman.pdf" download>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
