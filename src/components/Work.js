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
                <img src="static/img/christianlouboutin.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>CHRISTIAN LOUBOUTIN</h5>
                <span>Fashion</span>
              </div>
              <a className="link-overlay" href="https://ae.christianlouboutin.com/" target="_blank" />
            </div>
          </div>{" "}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/juilitte.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>JULIETTE - PAIN D'AMOUR</h5>
                <span>Food & Beverage</span>
              </div>
              <a className="link-overlay" href="https://juliette-boulangerie.ch/" target="_blank" />
            </div>
          </div>{" "}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/aura171_1.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>AURA SKYPOOL BOUTIQUE</h5>
                <span>Lifestyle</span>
              </div>
              <a className="link-overlay" href="https://auraskypool.com/" target="_blank" />
            </div>
          </div>{" "}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/send location.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>SEND LOCATION</h5>
                <span>Sportswear</span>
              </div>
              <a className="link-overlay" href="https://sendlocation.com/" target="_blank" />
            </div>
          </div>{" "}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/FURNITURE.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>NIRA STORE</h5>
                <span>Multi-Category Ecommerce</span>
              </div>
              <a className="link-overlay" href="https://nirastore.com/" target="_blank" />
            </div>
          </div>{" "}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/nalbandian.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>NALBANDIAN CARPETS</h5>
                <span>Carpetry</span>
              </div>
              <a className="link-overlay" href="https://nalbandiancarpets.com/" target="_blank" />
            </div>
          </div>{" "}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/rsvp.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>RSVP by Anastasia</h5>
                <span>Floral Design / Event Planning</span>
              </div>
              <a className="link-overlay" href="https://rsvpbyanastasia.com/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/Cherry_Dust_2.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>KETO KARTEL</h5>
                <span>Food & Beverage</span>
              </div>
              <a className="link-overlay" href="https://keto-kartel.com/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/redford.jpeg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Redford</h5>
                <span>Home Improvement / Outdoor & Garden</span>
              </div>
              <a className="link-overlay" href="https://redfordsupply.com/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/ishaya.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>ISHAYA</h5>
                <span>Fashion</span>
              </div>
              <a className="link-overlay" href="https://ishaya.fr/" target="_blank" />
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
                <span>Sustainable Packaging</span>
              </div>
              <a className="link-overlay" href="https://ecofibre.eu/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/meemseen.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Meem Seen</h5>
                <span>Fashion</span>
              </div>
              <a className="link-overlay" href="https://meemseen.pk/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/life watch.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Life Watch</h5>
                <span>Wearable Tech</span>
              </div>
              <a className="link-overlay" href="https://getlifewatch.com/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/aline.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>A line Insole</h5>
                <span>Health & Wellness</span>
              </div>
              <a className="link-overlay" href="https://alineinsoles.com/" target="_blank" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/banner.webp" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Skirting4Less</h5>
                <span>Building Materials</span>
              </div>
              <a className="link-overlay" href="https://skirting4less.co.uk/" target="_blank" />
            </div>
          </div>{" "}
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work;
