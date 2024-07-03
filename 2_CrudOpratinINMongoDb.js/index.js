const express = require('express');
const connectDB = require('./database');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const db = await connectDB();
    const user = req.body;
    await db.insertOne(user);
    res.status(201).send('User created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating the user');
  }
});

// Read all users
app.get('/users', async (req, res) => {
  try {
    const db = await connectDB();
    const users = await db.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});

// Read a single user by email
app.get('/users/:email', async (req, res) => {
  try {
    const db = await connectDB();
    const email = req.params.email;
    const user = await db.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching user');
  }
});

// Update a user by email
app.put('/users/:email', async (req, res) => {
  try {
    const db = await connectDB();
    const email = req.params.email;
    const updatedUser = req.body;
    const result = await db.updateOne(
      { email },
      { $set: updatedUser }
    );
    if (result.matchedCount > 0) {
      res.send('User updated');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating the user');
  }
});

// Delete a user by email
app.delete('/users/:email', async (req, res) => {
  try {
    const db = await connectDB();
    const email = req.params.email;
    const result = await db.deleteOne({ email });
    if (result.deletedCount > 0) {
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting the user');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
