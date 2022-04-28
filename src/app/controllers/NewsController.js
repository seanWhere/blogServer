
class NewController{

    // [GET] /news 
    index(req, res) {
        res.render('body/news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send("slug");
    }
}

module.exports = new NewController;