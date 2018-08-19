const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let amen;

  beforeEach((done) => {
    amen = new User({ name: 'Amen' });
    amen.save()
      .then(() => done());
  });

  function assertName (operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Amen Moja');
        done();
      });
  }

  it('A model/class instance type using set n save', (done) => {
    amen.set('name', 'Amen Moja')
    assertName(amen.save(), done);
  });

  it('A model/class instance can update', (done) => {
    assertName(amen.update({ name: 'Amen Moja' }), done);
  });

  it('A model/class can update', (done) => {
    assertName(
      User.update({ name: 'Amen' }, { name: 'Amen Moja' }),
      done
    )    
  });

  it('A model/class can update one record', (done) => {
    assertName(
      User.findOneAndUpdate({ name: 'Amen' }, { name: 'Amen Moja' }),
      done
    )    
  });

  it('A model/class class can find a record with an Id and update', (done) => {
    assertName(
      User.findByIdAndUpdate(amen._id, { name: 'Amen Moja' }),
      done
    )
  });
});
