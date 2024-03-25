const User = require("../models/User");
const City = require("../models/City")
const District = require("../models/District")
const path = require("path")
const fs = require("fs")



// Update
exports.get_update_url = async (req, res) => {
    const userUrl = req.params.url;
    const user = await User.findOne({ where: { url: userUrl } });
    try {
        res.render("site/update", { user: user })
    } catch (error) {
        console.log(error);
    }
}

exports.post_update_url = async function (req, res) {
    const userUrl = req.params.url;
    const { firstName, lastName, email, password } = req.body;
    let profile = req.file ? req.file.filename : null;

    try {
        const user = await User.findOne({ where: { url: userUrl } });

        if (!user) {
            return res.redirect("/");
        }

        if (!profile) {
            profile = user.profile;
        }

        // Eğer yeni bir profil resmi yüklendi ve eski profil mevcutsa, eski profili sil
        if (req.file && user.profile) {
            const oldProfilePath = path.join(__dirname, '..', 'usersProfilles', user.profile);
            try {
                fs.unlinkSync(oldProfilePath);
                console.log('Eski profil resmi başarıyla silindi.');
            } catch (err) {
                console.error('Eski profil resmi silinemedi:', err);
            }
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.profile = profile;

        await user.save();

        return res.redirect("/site/users");
    } catch (error) {
        console.error('Kullanıcı güncellenirken bir hata oluştu:', error);
        return res.redirect("/");
    }
}


// Delete
exports.get_delete_url = async (req, res) => {
    const userUrl = req.params.url;
    const user = await User.findOne({ where: { url: userUrl } });
    try {
        res.render("site/delete", {
            user: user
        })
    } catch (error) {
        console.log(error);
    }
}

exports.post_delete_url = async function (req, res) {
    const userUrl = req.params.url;
    try {
        const user = await User.findOne({ where: { url: userUrl } })
        fs.unlinkSync(path.join(__dirname, "..", "usersProfilles", user.profile))

        if (user) {
            await user.destroy();
            return res.redirect("/site/users")
        }
        res.redirect("/")

    } catch (error) {
        console.log(error);
    }
}



// Users List
exports.get_user_url = async (req, res) => {
    const userUrl = req.params.url;
    const message = req.session.message
    delete req.session.message

    try {
        const user = await User.findOne({ where: { url: userUrl } });
        res.render("site/user-details", {
            user: user,
            message: message
        })
    } catch (error) {
        console.log(error);
    }
}

exports.get_users = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render("site/users", {
            users: users
        })
    } catch (error) {
        console.log(error);
    }
}
