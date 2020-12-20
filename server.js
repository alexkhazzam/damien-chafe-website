const dotenv = require('dotenv');
const app = require('./app');
const nodemon = require('nodemon');

dotenv.config({ path: dotenv.config.env });

const PORT = process.env.PORT || 3000;

nodemon.on('crash', () => {
  console.log('Nodemon crashing...');
});

nodemon.addListener('crash', (event) => {
  console.log(event);
});

app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}`);
});
