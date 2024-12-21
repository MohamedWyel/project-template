import React, { useEffect } from "react";
import roomImage1 from '../images/room.jpg';
import roomImage10 from '../images/room10.jpg';
import roomImage11 from '../images/room11.jpg';
import roomImage5 from '../images/room5.jpg';
import roomImage9 from '../images/room9.jpg';
import roomImaged from '../images/roomd.jpg';
import Navbar from './Navbar';
import "./rooms.css";

const Rooms = () => {

    useEffect(() => {
        if (window.location.hash === "#Rooms") {
            const contactSection = document.getElementById("Rooms");
            if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    const handleBookNow = (cost) => {
        window.location.href = `/book?cost=${cost}`;
    };

    return (
        <>
            <Navbar />
            <br /><br /><br /><br /><br />
            <div className="header-title-container" id='Rooms'>
                <div className="lis1"></div>
                <p className="line38">Room Awaits</p>
                <div className="lis2"></div>
            </div>
            <br />
            <div className="rooms-container">
                <div className="room-card">
                    <img src={roomImage1} alt="Deluxe Room" className="room-image" />
                    <div className="room-details">
                        <p><span>2 Beds</span> <i className="fas fa-bed room-icon"></i></p>
                        <p><span>WiFi &nbsp;&nbsp;&nbsp;</span> <i className="fas fa-wifi room-icon"></i></p>
                        <p><span>2 Bath&nbsp;</span> <i className="fas fa-bath room-icon"></i></p>
                        <br />
                    </div>
                    <div className="room-price">
                        <p>900.90$</p>
                    </div>

                    <h3 className="room-title">Deluxe Room</h3>
                    <p className="room-description">Experience luxury and comfort with our deluxe rooms, featuring premium amenities.</p>
                    <button 
                        className="book-now-button" 
                        onClick={() => handleBookNow(900.90)}
                    >
                        BOOK NOW
                    </button>
                </div>
                
                <div className="room-card">
                    <img src={roomImage5} alt="Executive Suite" className="room-image" />
                    <div className="room-details">
                        <p><span>1 Bed</span> <i className="fas fa-bed room-icon"></i></p>
                        <p><span>WiFi &nbsp;&nbsp;</span> <i className="fas fa-wifi room-icon"></i></p>
                        <p><span>1 Bath&nbsp;</span> <i className="fas fa-bath room-icon"></i></p>
                        <br />
                    </div>
                    <div className="room-price">
                        <p>299.99$</p>
                    </div>

                    <h3 className="room-title">Executive Suite</h3>
                    <p className="room-description">Spacious and elegant, perfect for business or leisure travelers.</p>
                    <br /><br /><br />
                    <button
                        className="book-now-button"
                        onClick={() => handleBookNow(299.99)}
                    >
                        BOOK NOW
                    </button>
                </div>
                
                <div className="room-card">
                    <img src={roomImaged} alt="Presidential Suite" className="room-image" />
                    <div className="room-details">
                        <p><span>2 Beds</span> <i className="fas fa-bed room-icon"></i></p>
                        <p><span>WiFi &nbsp;&nbsp;&nbsp;</span> <i className="fas fa-wifi room-icon"></i></p>
                        <p><span>1 Bath&nbsp;</span> <i className="fas fa-bath room-icon"></i></p>
                        <br />
                    </div>
                    <div className="room-price">
                        <p>549.99$</p>
                    </div>
                    <h3 className="room-title">Presidential Suite</h3>
                    <p className="room-description">Indulge in ultimate luxury with our top-tier suite, offering exclusive services.</p>
                    <button
                        className="book-now-button"
                        onClick={() => handleBookNow(549.99)}
                    >
                        BOOK NOW
                    </button>
                </div>
            </div>
            <br /><br /><br /><br />

            <div className="rooms-container">
                <div className="room-card">
                    <img src={roomImage9} alt="Royal Suite" className="room-image" />
                    <div className="room-details">
                        <p><span>2 Beds</span> <i className="fas fa-bed room-icon"></i></p>
                        <p><span>WiFi &nbsp;&nbsp;&nbsp;</span> <i className="fas fa-wifi room-icon"></i></p>
                        <p><span>2 Bath&nbsp;</span> <i className="fas fa-bath room-icon"></i></p>
                        <br />
                    </div>
                    <div className="room-price">
                        <p>750$</p>
                    </div>
                
                    <h3 className="room-title">Royal Suite</h3>
                    <p className="room-description">Experience the epitome of elegance in our Royal Suite, designed for royalty with all the finest amenities.</p>
                    <button 
                        className="book-now-button" 
                        onClick={() => handleBookNow(750)}
                    >
                        BOOK NOW
                    </button>
                </div>
                
                <div className="room-card">
                    <img src={roomImage10} alt="Garden View Room" className="room-image" />
                    <div className="room-details">
                        <p><span>1 Bed</span> <i className="fas fa-bed room-icon"></i></p>
                        <p><span>WiFi &nbsp;&nbsp;</span> <i className="fas fa-wifi room-icon"></i></p>
                        <p><span>1 Bath&nbsp;</span> <i className="fas fa-bath room-icon"></i></p>
                        <br />
                    </div>
                    <div className="room-price">
                        <p>300$</p>
                    </div>
                    <h3 className="room-title">Garden View Room</h3>
                    <p className="room-description">Relax in style with stunning views of our lush gardens, offering serenity and comfort in every corner.</p>

                    <br /><br /><br />
                    <button 
                        className="book-now-button" 
                        onClick={() => handleBookNow(300)}
                    >
                        BOOK NOW
                    </button>
                </div>
                
                <div className="room-card">
                    <img src={roomImage11} alt="Oceanfront Room" className="room-image" />
                    <div className="room-details">
                        <p><span>2 Beds</span> <i className="fas fa-bed room-icon"></i></p>
                        <p><span>WiFi &nbsp;&nbsp;&nbsp;</span> <i className="fas fa-wifi room-icon"></i></p>
                        <p><span>1 Bath&nbsp;</span> <i className="fas fa-bath room-icon"></i></p>
                        <br />
                    </div>
                    <div className="room-price">
                        <p>480$</p>
                    </div>
                    <h3 className="room-title">Oceanfront Room</h3>
                    <p className="room-description">Wake up to breathtaking views of the ocean, with unparalleled luxury and peace right at your doorstep.</p>
                    <button
                        className="book-now-button"
                        onClick={() => handleBookNow(480)}
                    >
                        BOOK NOW
                    </button>
                </div>
            </div>
        </>
    );
};
export default Rooms;