const should = require('should'),
    sinon = require('sinon');

describe('Book Controller Tests', () => {
   describe('Post', () => {
      it('should not allow an empty title on post', () => {

          /*
          * Just for shits and giggles
          * */
          console.log(`coming from gulp-env: ${process.env.ENV}`);

          const req = {
              body: {
                author: 'Bob'
              }
          };

          const res = {
            status: sinon.spy(),
            send: sinon.spy()
          };

          const BookController = require('../controllers/BookController');
          const bookController = BookController();

          bookController.post(req, res);

          res.status.calledWith(400).should.equal(true, `Bad Status: ${res.status.args[0][0]}`);
          res.send.calledWith('Title is required').should.equal(true);
      })
   });
});