import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import axios from "axios";

const Blog = () => {
    // State variables
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [commentText, setCommentText] = useState('');

    // Function to fetch comments from the backend
    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/comments', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    // Fetch comments when the component mounts
    useEffect(() => {
        fetchComments();
    }, []);

    // Function to handle adding a comment
    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/comments', {
                author: name,
                content: commentText
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setComments([...comments, response.data]);
            // Clear the comment form inputs after adding
            setName('');
            setEmail('');
            setCommentText('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Function to handle editing a comment
    const handleEditComment = async (commentId, updatedContent) => {
        try {
            const response = await axios.put(`http://localhost:5000/comments/${commentId}`, {
                content: updatedContent
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Assuming comments are stored in state
            const updatedComments = comments.map(comment => {
                if (comment._id === commentId) {
                    return { ...comment, content: updatedContent };
                }
                return comment;
            });
            setComments(updatedComments);
        } catch (error) {
            console.error('Error editing comment:', error);
        }
    };

    // Function to handle input change while editing a comment
    const handleEditInputChange = (value, commentId) => {
        const updatedComments = comments.map(comment => {
            if (comment._id === commentId) {
                return { ...comment, updatedContent: value };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    // Function to save the edited comment
    const handleSaveEdit = async (commentId) => {
        const updatedComment = comments.find(comment => comment._id === commentId);
        try {
            await handleEditComment(commentId, updatedComment.updatedContent);
            // Reset edit mode and updatedContent
            const updatedComments = comments.map(comment => {
                if (comment._id === commentId) {
                    return { ...comment, editing: false, content: updatedComment.updatedContent };
                }
                return comment;
            });
            setComments(updatedComments);
        } catch (error) {
            console.error('Error saving edited comment:', error);
        }
    };

    // Function to cancel editing a comment
    const handleCancelEdit = (commentId) => {
        const updatedComments = comments.map(comment => {
            if (comment._id === commentId) {
                return { ...comment, editing: false, updatedContent: '' };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    // Function to handle clicking on the Edit button to enter edit mode
    const handleEditClick = (commentId) => {
        const updatedComments = comments.map(comment => {
            if (comment._id === commentId) {
             return { ...comment, editing: true, updatedContent: comment.content };
            }
            return comment;
        });
        setComments(updatedComments);
    };


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    





















    // Function to handle deleting a comment
    const handleDeleteComment = async (commentId) => {
        try {
            await axios.delete(`http://localhost:5000/comments/${commentId}`);
            setComments(comments.filter(comment => comment._id !== commentId)); // Change comment.id to comment._id
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

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
                    {/* Comment box */}
                    <div className="comment-box">
                        <h3>Leave a comment</h3>
                        <form className="comment-form" onSubmit={handleAddComment}>
                            <input type="text" placeholder="Enter Name" required value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <textarea rows="5" placeholder="Your comment" required value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
                            <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
                        </form>
                    </div>

                    {/* Display comments */}
                    <div className="display-comments">
                        <h3>Comments</h3>
                        {comments.map((comment, index) => (
                            <div key={index} className="comment">
                                {comment.editing ? (
                                    <div className="editing-comment">
                                        <input type="text" className="edit-input" value={comment.updatedContent} onChange={(e) => handleEditInputChange(e.target.value, comment._id)} />
                                        <button className="save-button" onClick={() => handleSaveEdit(comment._id)}>Save</button>
                                        <button className="cancel-button" onClick={() => handleCancelEdit(comment._id)}>Cancel</button>
                                    </div>
                                ) : (
                                    <div className="view-comment">
                                        <p className="comment-content"><strong>{comment.author}:</strong> {comment.content}</p>
                                        <div className="comment-actions">
                                            <button className="edit-button" onClick={() => handleEditClick(comment._id)}>Edit</button>
                                            <button className="delete-button" onClick={() => handleDeleteComment(comment._id)}>Delete</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
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
