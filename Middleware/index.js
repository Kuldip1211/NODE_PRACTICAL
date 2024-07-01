

// Example usage in an Express app
const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
 if (!req.query.age) {
   res.send("please provide age");
 } else {
   next();
 }
};

app.use(reqFilter);

app.get('/', (req, res) => {
 res.send('Hello, world!');
});

app.get('/user', (req, res) => {
 res.send('Hello, world! from user');
});

app.listen(4001, () => {
 console.log('Server is running on port 4001');
});
