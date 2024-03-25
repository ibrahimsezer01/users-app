module.exports = function(req, res, next) {
    if (!req.session.isAuth) {
        return res.redirect("/site/login?returnUrl=" + req.originalUrl);
    }
    next()
}