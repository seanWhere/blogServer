class SiteController {
    index(req, res) {
        res.render('body/home');
    }

    search(req, res) {
        res.render('body/search');
    }
}

module.exports = new SiteController();
