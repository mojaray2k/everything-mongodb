const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let amen;

  beforeEach((done) => {
    amen = new User({ name: 'Amen' });
    amen.save()
      .then(() => done());
  });

  it('model/class instance remove', (done) => {
    // amen which is a User model/class instance
    amen.remove()
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('model/class method remove', (done) => {
    // User model/class
    User.remove({ name: 'Amen' })
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('model/class method findAndRemove', (done) => {
    // User model/class
    User.findOneAndRemove({ name: 'Amen' })
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('model/class method findByIdRemove', (done) => {
    // User model/class
    User.findByIdAndRemove(amen._id)
      .then(() => User.findOne({ name: 'Amen'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
});
