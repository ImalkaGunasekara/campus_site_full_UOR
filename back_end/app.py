from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId
from datetime import datetime


app = Flask(__name__)
CORS(app, origins='*')  # Enable CORS to allow cross-origin requests
app.config["MONGO_URI"] = "mongodb://localhost:27017/campus_site"
mongo = PyMongo(app)

# Endpoint to add a new comment
@app.route('/comments', methods=['POST'])
def add_comment():
    data = request.json
    content = data.get('content')
    author = data.get('author')

    # Ensure required fields are provided
    if not content or not author:
        return jsonify({'error': 'Content and Author are required'}), 400

    # Create a new comment document
    new_comment = {
        'content': content,
        'author': author,
        'timestamp': datetime.utcnow(),
        'updated_at': datetime.utcnow()  # Add updated_at field
    }

    # Insert the new comment into the database
    result = mongo.db.comments.insert_one(new_comment)

    # Return the inserted comment
    new_comment['_id'] = str(result.inserted_id)
    return jsonify(new_comment), 201

# Endpoint to fetch all comments
@app.route('/comments', methods=['GET'])
def get_comments():
    comments = list(mongo.db.comments.find({}, {'_id': False}))
    return jsonify(comments), 200

# Endpoint to edit a comment
@app.route('/comments/<comment_id>', methods=['PUT'])
def edit_comment(comment_id):
    data = request.json
    content = data.get('content')

    # Ensure content is provided
    if not content:
        return jsonify({'error': 'Content is required'}), 400

    # Update the comment in the database
    result = mongo.db.comments.update_one(
        {'_id': ObjectId(comment_id)},
        {'$set': {'content': content, 'updated_at': datetime.utcnow()}}
    )

    if result.modified_count == 0:
        return jsonify({'error': 'Comment not found or not modified'}), 404

    # Fetch the updated comment
    updated_comment = mongo.db.comments.find_one({'_id': ObjectId(comment_id)})
    return jsonify(updated_comment), 200

# Endpoint to delete a comment
@app.route('/comments/<comment_id>', methods=['DELETE'])
def delete_comment(comment_id):
    mongo.db.comments.delete_one({'_id': ObjectId(comment_id)})
    return jsonify({'message': 'Comment deleted successfully'}), 200




if __name__ == "__main__":
    app.run(debug=True)

