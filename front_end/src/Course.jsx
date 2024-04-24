import React from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Course = () => {
    return(
        <div>
        <section className="sub-header">
            <NavBar />
            <h1>Our Courses</h1>
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

        

        {/* <!-- Footer --> */}

        <Footer />
    </div>
    )
}

export default Course;