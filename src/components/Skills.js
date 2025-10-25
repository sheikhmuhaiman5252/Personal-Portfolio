import { useEffect } from "react";
import { tony } from "../layouts/utils";

const Skills = () => {
  useEffect(() => {
    tony.activeSkillProgress();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">
                Expert Shopify &amp; Web Developer crafting high-performing online stores
              </p>

            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 m-15px-tb">
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">HTML5, CSS3, Tailwind CSS & Bootstrap</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={92}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>99%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">JavaScript & jQuery</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={72}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Shopify Development</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>99%</span>
                </div>
              </div>
            </div>
            {/* /skill */}
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Liquid & Theme Customization</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={88}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>99%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
          </div>
          <div className="col-lg-5 m-15px-tb">
            <div className="row">
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <div className="media-body">
                    <h5>3+ Years of Experience</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon"><i className="fas fa-trophy" /></div>
                  <div className="media-body">
                    <h5>15+ Happy Clients</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon"><i className="fas fa-mug-hot" /></div>
                  <div className="media-body">
                    <h5>Infinite Cups of Coffee ☕</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon"><i className="fas fa-globe" /></div>
                  <div className="media-body">
                    <h5>Worked with Global Brands</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
