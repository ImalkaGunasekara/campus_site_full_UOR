import React from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Blog = () => {
    return(
    <div>
        <section className="sub-header">
            <NavBar />
            <h1>Our certificate & Online Programs for 2021</h1>
        </section>

        {/* <!-- Blog Page Content --> */}

        <div className="blog-content">
            <div className="row">
                <div className="blog-left">
                    <img src="images/certificate.jpg" />
                    <h2>Our certificate & Online Programs for 2021</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p> 
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p> 
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                    <div className="comment-box">
                        <h3>Leave a comment</h3>
                        <form className="comment-form">
                            <input type="text" placeholder="Enter Name" required/>
                            <input type="email" placeholder="Enter Email" required/>
                            <textarea rows="5" placeholder="Your comment"required></textarea>
                            <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
                        </form>
                    </div>     
                </div>
                <div className="blog-right">
                    <h3>Post Categories</h3>
                    <div>
                        <span>Business Analytic</span>
                        <span>21</span>
                    </div>
                    <div>
                        <span>Data Science</span>
                        <span>28</span>
                    </div>
                    <div>
                        <span>Machine Mearning</span>
                        <span>15</span>
                    </div>
                    <div>
                        <span>Computer Science</span>
                        <span>34</span>
                    </div>
                    <div>
                        <span>AutoCAD</span>
                        <span>42</span>
                    </div>
                    <div>
                        <span>Journalism</span>
                        <span>22</span>
                    </div>
                    <div>
                        <span>Commerce</span>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </div>

        

        {/* <!-- Footer --> */}

        <Footer />

    </div>
    )
}

export default Blog;