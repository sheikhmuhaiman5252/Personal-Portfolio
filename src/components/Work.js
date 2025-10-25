import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
              <p className="text-uppercase small">
                Custom Shopify themes, stores & web designs that perform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/rsvp.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>RSVP by Anastasia</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://rsvpbyanastasia.com/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/TYLT.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>TYLT</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://www.tylt.com/" target="_blank"/>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/redford.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Redford</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://redfordsupply.com/" target="_blank"/>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/ishaya.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>ISHAYA</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://ishaya.fr/" target="_blank"/>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/ecofiber.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Eco Fibre</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://ecofibre.eu/" target="_blank"/>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/klimazentral.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>klimazentral</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://klimazentral.de/" target="_blank"/>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/lifewatch.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Life Watch</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://getlifewatch.com/" target="_blank"/>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/alineinsole.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>A line Insole</h5>
                <span>Custom Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://alineinsoles.com/" target="_blank"/>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/skirting.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Skirting4Less</h5>
                <span>Customized Shopify Theme</span>
              </div>
              <a className="link-overlay" href="https://skirting4less.co.uk/" target="_blank"/>
            </div>
          </div>{" "}
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work;
