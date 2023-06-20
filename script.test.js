//const assert = require('assert');
const add = require('chai');
const { add } = require('./script')

describe('Application can perform addition', () => {
it('should add numbers', () => {
    //assert.equal(2 + 5, 7, "Addition wrong");
chai.expect(add(5, 5)).to.be.equal(10);
});
it('should only add numbers', () => {
    chai.expect(add('5', 10)).to.equal('parameter is not a number');
})
}); 