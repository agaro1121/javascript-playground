const should = require('should'),
    request = require("supertest"),
    app = require('../app'),
    agent = request.agent(app);

describe('Book Crud Test', () => {
    it('shuold allow a book to be posted and return middle fields', (done) => {
        const bookPost = {title: 'new Book', author: 'Anthony', genre: 'Fiction'};

        agent.post('/api/books')
            .send(bookPost)
            .expect(201)
            .end((err, results) => {
                results.body.post_tag.should.equal("successful_post");
                done(); //done with this test
            })
    })

    afterEach((done) => {
        console.log("Running afterEach(...)");
        done();
    });
});