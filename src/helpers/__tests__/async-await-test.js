import aa from './../async-await';

const expect = chai.expect;

describe('async-await', function() {

  it('calls the callback', (done)=>{

    aa(12, {data: true}).then(function() {
      done();
    });

  });
});
