//constants
const express = require('express');
const mongoose = require('mongoose');
const app = express();
//connection server
const port = 3002;

//connection mongoDB
require('dotenv').config(); 
const adminPassword = encodeURIComponent(process.env.ADMIN_PASSWORD); // Encode password
const mongoURI = `mongodb+srv://admin:${adminPassword}@mtapi.aefhg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=MTAPI`;

//Middleware - connects applications and systems to allow transfer of data
app.use(express.json()); 

// MongoDB Connection - save most up to date version database
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
  });

//define user schema- this is how information user inputs will be organized.
const userLayout = new mongoose.Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true}
});

//Create a model based off of schema above to link code with MongoDB
const UserModel = mongoose.model('User',userLayout);

//Rest api requests//

// GET /posts - Get all exam posts 
app.get('/posts', async (req,res) => {
    try {
        //validate if retreival success
        const posts = await UserModel.find();
        res.json(posts); // output all posts info json
    } catch (err) {
        res.status(500).json({message: 'Error fetching users', error: err });
  }
})

// POST Method - Make a new post
app.post('/posts', async (req,res) => {
    const {question, answer} = req.body;

    //validate posted
    try {
        const newPost = new UserModel({question,answer});
        await newPost.save();
        res.status(201).json(newPost); // Return the created post
  } catch (err) {
    res.status(400).json({ message: 'Error creating post', error: err });
  }
});

//PUT method - update post by id
app.put('/posts/:id', async (req,res) => {
    const {question, answer} = req.body;

    try {
        const updatedPost = await UserModel.findByIdAndUpdate(
            req.params.id,
            {question,answer},
            {new: true} //output updated info
        );
        
        //validate info change
        if (updatedPost) {
            res.json(updatedPost);
        }else {
            res.status(404).json({message:'Post not found'});
        } 
    } catch (err) {
            res.status(400).json({ message: 'Error updating post', error: err });
        }
});

//Delete request - delete post
app.delete('/posts/:id', async (req, res) => {
    try {
      const deletedPost = await UserModel.findByIdAndDelete(req.params.id); 
  
      if (deletedPost) {
        res.status(200).json({ message: `Post with ID ${req.params.id} deleted successfully` });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error deleting post', error: err });
    }
  });
//initiate server
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});