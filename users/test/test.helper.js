const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/user_test', { useNewUrlParser: true }); // Makes a connection to mongodb and if needed creates the the database.
  mongoose.connection
    .once('open', () => {done();}) // Watch for mongodb to emit an event called open.
    .on('error', (error) => console.warn('Warning', error)); // Watch for mongodb to emit an event called error.
})

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
  });
});
  