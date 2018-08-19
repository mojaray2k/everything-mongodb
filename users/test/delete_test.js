const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let amen;

  beforeEach((done) => {
    amen = new User({ name: 'Amen' });
    amen.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    // amen which is a User class instance
    amen.remove()
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', (done) => {
    // User class
    User.remove({ name: 'Amen' })
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findAndRemove', (done) => {
    // User class
    User.findOneAndRemove({ name: 'Amen' })
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findByIdRemove', (done) => {
    // User class
    User.findByIdAndRemove(amen._id)
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
});
