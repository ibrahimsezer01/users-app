module.exports = function(req, res, next) {
    res.locals.isAuth = req.session.isAuth
    res.locals.nickName = req.session.nickName
    next()
}