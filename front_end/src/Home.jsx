import React, { useEffect, useState,useRef } from 'react';
import { Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const Home = () => {

  return (
    <div>
      <section className="header">
        <NavBar />
            <div className="text-box">
                <h1>World's Biggest University</h1>
                <p>Making website is now one of the easiest things in the world.You
                    just need to learn HTML, CSS,<br /> Javascriot and you are good to go
                </p>
                <Link to="/contact" className="hero-btn">Visit Us To know More</Link>
            </div>
        </section>
    
        {/* <!-- Course --> */}
    
        <section className="course">
            <h1>Courses we offer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="row">
                <div className="course-col">
                    <h3>Intermediate</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                </div>
                <div className="course-col">
                    <h3>Degree</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                </div>
                <div className="course-col">
                    <h3>Post Graduation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                </div>
            </div>
        </section>
    
        {/* <!-- Campus --> */}
    
        <section className="campus">
            <h1>Our Global Campus</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="row">
                <div className="campus-col">
                    <img src="images/london.png" />
                    <div className="layer">
                        <h3>LONDON</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="images/newyork.png" />
                    <div className="layer">
                        <h3>NEW YORK</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="images/washington.png" />
                    <div className="layer">
                        <h3>WASHINGTON</h3>
                    </div>
                </div>
            </div>
        </section>
    
    
        {/* <!-- Facilities --> */}
        <section className="facilities">
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="row">
                <div className="facilities-col">
                    <img src="images/library.png" />
                    <h3>World Class Library</h3>    
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>       
                </div>
                <div className="facilities-col">
                    <img src="images/basketball.png" />
                    <h3>Largest Play Ground</h3>    
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>       
                </div>
                <div className="facilities-col">
                    <img src="images/cafeteria.png" />
                    <h3>Tasty and Healthy Food</h3>    
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>       
                </div>
            </div>
        </section>
    
        {/* <!-- Testimonials --> */}
    
        <section className="testimonials">
            <h1>What Our students Say</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>    
            <div className="row">
                <div className="testimonial-col">
                    <img src="images/user1.jpg" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                            Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                        </p>
                        <h3>Christine Berkley</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
                <div className="testimonial-col">
                    <img src="images/user2.jpg" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                            Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                        </p>
                        <h3>David Byer</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                </div>
            </div>
        </section>
    
        {/* <!-- Call To Action --> */}
    
        <section className="cta">
            <h1>Enroll For Our Various Online Courses <br /> Anywhere From The World</h1>
            <Link to="/contact" className="hero-btn">CONTACT US</Link>
        </section>
    
        {/* <!-- Footer --> */}
        <Footer />

    </div>       
    )
};

export default Home;