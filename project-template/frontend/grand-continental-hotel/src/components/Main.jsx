import "./main.css";
import roomImage2 from '../images/room2.jpg';
import roomImage3 from '../images/room3.jpg';
import roomImage4 from '../images/room4.jpeg';




import { useState } from "react";

const Main = () => {
  return (
    <>
    
<div className="header-background">
      <div className="header-overlay"></div> {/* الطبقة السوداء الشفافة */}
      <div className="header-text">
      <p className="line3"> Luxury Living</p> {/* السطر الثاني */}
      <div className="lis1"></div>
      <div className="lis2"></div>

      <br />
        <p className="line1">Discover A Brand</p> {/* السطر الأول */}
        <p className="line2"> Luxurious Hotel</p> {/* السطر الثاني */}
      </div>
    </div> 
    <br />
    <br /><br /> <br />
    <h2 className="about1"> Welcome to Grand Continental    </h2>
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
    <p>1234</p>
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

    <div className="lis1 ll"></div>
        <p className="line38"> Our Rooms </p>

      <div className="lis1 ll2"></div>
<br /><br /><br /><br />
      
      <h2 className="explore">Explore Our Rooms      </h2>



      <div className="card-container">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
            <img src={roomImage4} alt="Room 1" className="card-image" />
            </div>
            <div className="card-back">
              <div className="card-info">
                <h3>Luxurious Room</h3>
                <p>Experience the best luxury with modern amenities.</p>
                <button className="card-btn">Explore More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              
            <img src={roomImage2} alt="Room 1" className="card-image" s/>
                
            </div>
            <div className="card-back">
              <div className="card-info">
                <h3>Comfort Suite</h3>
                <p>Relax in style with our comfortable suites.</p>
                <button className="card-btn">Explore More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
            <img src={roomImage3} alt="Room 1" className="card-image" s/>

            </div>
            <div className="card-back">
              <div className="card-info">
                <h3>Exclusive Penthouse</h3>
                <p>Unparalleled views and top-tier luxury.</p>
                <button className="card-btn">Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Main;
