const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let amen;

  beforeEach((done) => {
    amen = new User({ name: 'Amen'});
    amen.save()
      .then(() => done());
  })

  it('finds all users with the name of amen', (done) => {
    User.find({ name: 'Amen'})
      .then((users) => {
        assert(users[0]._id.toString() === amen._id.toString());
        done();
      });
  });
  it('find a user with a particular id', (done) => {
    User.findOne({ _id: amen._id })
      .then((user) => {
          assert(user.name === 'Amen');
        done();
      });
  });
});
