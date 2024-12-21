import "./main.css";
import roomImage2 from '../images/room2.jpg';
import roomImage3 from '../images/room3.jpg';
import roomImage4 from '../images/room4.jpeg';
import Navbar from './Navbar'; 




import { useEffect } from "react";

const Main = () => {

  useEffect(() => {
    if (window.location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.location.hash === "#about") {
      const contactSection = document.getElementById("about");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.location.hash === "#reviews") {
      const contactSection = document.getElementById("reviews");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.location.hash === "#Services") {
      const contactSection = document.getElementById("Services");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
          <Navbar /> 

    
          <div className="header-background">
  <div className="header-overlay"></div> 
  <div className="header-text">
    <div class="header-title-container">
      <div class="lis1"></div>
      <p class="line38 lux">Luxury Living</p>
      <div class="lis2"></div>
    </div>
    <br />
    <p className="line1">Discover A Brand</p>
    <p className="line2"> Luxurious Hotel</p>
  </div>
</div> 
<br />
<br /><br /> <br />
<h2 id="about" className="about1"> Welcome to Grand Continental</h2>
<p className="pp">
  Welcome to our luxurious hotel, where elegance and comfort come together in perfect harmony.  
  Experience unparalleled hospitality and world-class amenities designed to exceed your expectations.  
  Relax, unwind, and let us take care of every detail to make your stay truly unforgettable.
</p>
<br />

<div class="info">
  <div className="header-overlay2"></div>
  <div class="section">
    <i class="fas fa-hotel"></i>
    <p>1200</p>
    <p>Rooms</p>
  </div>
  <div class="section">
    <i class="fa-solid fa-users"></i>
    <p>300</p>
    <p>Staffs</p>
  </div>
  <div class="section">
    <i class="fa-solid fa-user-plus"></i>
    <p>2500</p>
    <p>Clints</p>
  </div>
</div>

<br /><br /><br /><br /><br /><br /> <br />
<div class="header-title-container">
  <div class="lis1"></div>
  <p class="line38">Our Rooms</p>
  <div class="lis2"></div>
</div>
<br /><br /><br /><br />
<h2 className="explore">Explore Our Rooms</h2>

<div className="card-container">
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src={roomImage4} alt="Room 1" className="card-image" />
      </div>
      <div className="card-back">
        <div className="card-info">
          <h3 className="doubleBed">Double Room</h3>
          <p><i className="fas fa-bed"></i> 2 Bed</p>
          <p><i className="fas fa-bath"></i> 1 Bath</p>
          <p className="doubleBed2">A comfortable room featuring a large double bed.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src={roomImage2} alt="Room 1" className="card-image" />
      </div>
      <div className="card-back">
        <div className="card-info">
          <h3 className="doubleBed">Comfort Suite</h3>
          <p><i className="fas fa-bed"></i> 1Bed</p>
          <p><i className="fas fa-bath"></i> Bath</p>
          <p><i className="fas fa-wifi"></i> Wifi</p>
          <p className="doubleBed2">Relax in style with our comfortable suites.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img src={roomImage3} alt="Room 1" className="card-image" />
      </div>
      <div className="card-back">
        <div className="card-info">
          <h3 className="doubleBed">Luxury Room</h3>
          <div className="room-features">
            <p><i className="fas fa-bed"></i> 3 Bed</p>
            <p><i className="fas fa-bath"></i> 2 Bath</p>
            <p><i className="fas fa-wifi"></i> Wifi</p>
          </div>
          <p className="doubleBed2">A lavish room with elegant decor, comfort and modern amenities.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<br /><br /><br /><br /><br /><br /> <br />
<div class="header-title-container">
  <div class="lis1"></div>
  <p class="line38">Our Services</p>
  <div class="lis2"></div>
</div>
<br /><br /><br /><br />
<h2 className="explore">Explore Our Services</h2>
<div className="services-container">
  <div className="service">
    <i className="fas fa-concierge-bell"></i>
    <h3>24/7 Concierge</h3>
    <p>Our dedicated team is here for you round the clock.</p>
  </div>
  <div className="service">
    <i className="fas fa-utensils"></i>
    <h3>Fine Dining</h3>
    <p>Enjoy exquisite culinary experiences at our restaurants.</p>
  </div>
  <div className="service">
    <i className="fas fa-spa"></i>
    <h3>Spa & Wellness</h3>
    <p>Relax and rejuvenate with our world-class spa services.</p>
  </div>
</div>

<div id="Services" className="services-container">
  <div className="service">
    <i className="fas fa-swimmer"></i>
    <h3>Swimming Pool</h3>
    <p>Take a dip in our luxurious, temperature-controlled pool.</p>
  </div>
  <div className="service">
    <i className="fas fa-hotel"></i>
    <h3>Rooms & Department</h3>
    <p>Comfortable rooms tailored for your ultimate stay.</p>
  </div>
  <div className="service">
    <i className="fas fa-dumbbell"></i>
    <h3>Gym & Yoga</h3>
    <p>Stay fit and healthy with our state-of-the-art facilities.</p>
  </div>
</div>

<br />
<br />
<br />


<h2 className="comments-title">Customer Reviews</h2>

<div id="reviews" className="comments-section">
  <div className="comment">
    <div className="user-info">
      <i className="fas fa-user-circle"></i>
      <h3>Seif Talal</h3>
    </div>
    <div className="rating">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
    <p>"Amazing experience! The service was top-notch and the staff were incredibly helpful."</p>
  </div>

  <div className="comment">
    <div className="user-info">
      <i className="fas fa-user-circle"></i>
      <h3>الحمو وائل</h3>
    </div>
    <div className="rating">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
    <p>"The food was exceptional and the ambiance was perfect for a relaxing getaway."</p>
  </div>

  <div className="comment">
    <div className="user-info">
      <i className="fas fa-user-circle"></i>
      <h3>Michael Brown</h3>
    </div>
    <div className="rating">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
    <p>"I enjoyed every moment of my stay. Highly recommended for families and couples alike!"</p>
  </div>
</div>

<br /><br /><br /><br />

<footer id="contact" className="footer-section">
  <div className="footer-container">
    <div style={{ backgroundColor: '#ffa500', color: '#fff', padding: '20px' }}>
      <h2>GRAND CONT.</h2>
      <p>
        Discover <b>Grand Continental</b>, a luxurious destination that
        redefines comfort and hospitality for an unforgettable stay.
      </p>
    </div>

    <div className="footer-contact">
      <h3>Contact</h3>
      <p><i className="fas fa-map-marker-alt"></i> Elw7da Street, Imbaba, Egypt</p>
      <p><i className="fas fa-phone-alt"></i> +012 345 67890</p>
      <p><i className="fas fa-envelope"></i> mail@domain.com</p>
      <div className="footer-socials">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>

    <div className="footer-company">
      <h3>Company</h3>
      <p>We strive to create memorable experiences that blend luxury and comfort.</p>
      <p>Our mission is to deliver unmatched service and hospitality.</p>
    </div>

    <div className="footer-services">
      <h3>Our Vision</h3>
      <p>To set the standard for global excellence in the hospitality industry.</p>
      <p>Building lifetime memories with exceptional service and innovation.</p>
    </div>
  </div>
</footer>



      </>
  );
};

export default Main;

