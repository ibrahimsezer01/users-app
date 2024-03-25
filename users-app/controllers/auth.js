const User = require("../models/User");
const slugField = require("../helpers/slugfield")
const message = require("../helpers/session_message")
const bcrypt = require('bcrypt');

// Log in
exports.get_login = async (req, res) => {
    try {
        const message = req.session.message
        delete req.session.message

        res.render("site/login", {
            message: message
        });
    } catch (error) {
        console.log(error);
    }
}

exports.post_login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            req.session.message = message("Email hatalı", "danger")
            return res.redirect("site/login");
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            req.session.message = message("Parola Hatalı", "danger")
            return res.redirect("site/login")
        }

        req.session.isAuth = true
        req.session.nickName = user.nickName
        return res.redirect(req.query.returnUrl || "/site/user/" + user.url)

    } catch (error) {
        console.log(error);
    }
}


// Register
exports.get_register = async (req, res) => {
    try {
        const message = req.session.message
        delete req.session.message

        res.render("site/register", {
            message: message,
        });
    } catch (error) {
        console.log(error);
    }
}

exports.post_register = async (req, res) => {
    const { nickName, firstName, lastName, email, password } = req.body;
    const url = slugField(nickName)
    const profile = req.file.filename
    const passwordHash = await bcrypt.hash(password, 10)
    try {
        const userCheckNickName = await User.findOne({ where: { url: url } })
        if (userCheckNickName) {
            req.session.message =  message("Kullanıcı Adı Başka Bir Kuallnıcı tarafindan Kullanılıyor", "warning")
            return res.redirect("/site/register")
        }

        const userCheckEmail = await User.findOne({ where: { email: email } })
        if (userCheckEmail) {
            req.session.message = message("Bu Email Başka Bir Kuallnıcı tarafindan Kullanılıyor", "warning")
            return res.redirect("/site/register")
        }

        const user = await User.create({ 
            nickName: nickName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordHash,
            profile: profile,
            url: url
         });

        req.session.isAuth = true
        req.session.nickName = user.nickName
        req.session.message = message("Hesap Başariyla Oluşturuldu, Hoşgeldiniz " + nickName, "success")
        res.redirect(req.query.returnUrl || "/site/user/" + user.url);
    } catch (error) {
        console.log(error);
    }
}


// Log out
exports.get_logout = async (req, res) => {
    try {
        await req.session.destroy()
        res.redirect("/site/login");
    } catch (error) {
        console.log(error);
    }
}