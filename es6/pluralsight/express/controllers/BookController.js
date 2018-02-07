const bookController = () => {

    const post = (req, res) => {
        if(!req.body.title){
            res.status(400);
            res.send('Title is required');
        } else {
            res.status(201);
            req.body.post_tag = "successful_post";
            res.send(req.body);
        }
    };

    const get = (req, res) => {
        const query = req.query; //query string - { genre: 'Fiction' }
        console.log(query);
        const responseJson = {
            hello: "This my book api! From Controller !!"
        };
        res.json(responseJson);
    };

    return {
      post: post,
      get: get
    };
};

module.exports = bookController;
