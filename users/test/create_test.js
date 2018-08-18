const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const amen = new User({ name: 'Amen'});

    amen.save()
      .then(() => {
        // Has amem bee saved successfully?
        assert(!amen.isNew);
        done();
      });
  });
});
