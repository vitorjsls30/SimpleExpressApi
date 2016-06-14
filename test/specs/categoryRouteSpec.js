var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var single = require('../../routes/categories/single');


describe('Routes', function() {
    describe('Category Routes', function () {
        it('GET Single Category should respond', function () {
            var req, res, spy;

            req = res = {};
            spy = res.json = sinon.spy();

            single(req, res);
            expect(spy.calledOnce).to.equal(true);
        });
    });
});