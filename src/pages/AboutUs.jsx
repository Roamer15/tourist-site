import HeadContact from "../components/HeadContact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <HeadContact />
      <Navbar />
      <div className="hero-card">
        <div className="image-left">
          <h1>We are dedicated to providing the best travel experience.</h1>
          <p>Discover the Land of a Thousand Hills</p>
          <div className="about-us-bar">
            <div className="booking-total">
              <div className="booking">
                <span className="title">Guestst</span>
                <p className="detail">
                  2 Adult <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
              <div className="booking">
                <span className="title">Date</span>
                <p className="detail">
                  12 - 13 April 2021 <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
              <div className="booking">
                <span className="title">Package</span>
                <p className="detail">
                Akagera Tour <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
            </div>
            <button className="sign-in sign-about">Book Now</button>
          </div>
        </div>
        <div className="image-right">
          <img src="https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZTTtcA7umDxF2EKykhyQ2uyykn-mTE2DzNVFc5lMgwHCD8K2wK7oO3dzX-PIwC70gzpE-2qXuUO2D4HdJuaEAAOHJN8cXFknPUM0Mb6vNZOnrsBEaliVODTTrdsydZvu67~~~2VGTiQK4Avs9X4gVs-v2b250SjTzJh7XeIn70vmVcqUX5u0cvq~V3iGhf8HYpFt3oBE6zT0NoUz4rbdSGKDxKC4iXKJWhEG9Mjo0l8JSobSoGq49nsBaXezkz--3ajxBaiWgUM-20Kd4hk8Af6LGX0BIsieZJlrMTmhJu8HaUBJlzRlA0LQxT1Y7Sfp2HFWSgs3tQg--oqMHVfaHw__" alt="chimpazee" />
        </div>
      </div>
      <div className="welcome">
        <h1>Welcome to Africa Wizzy Safari</h1>
      </div>
      <Footer />
    </>
  );
}
