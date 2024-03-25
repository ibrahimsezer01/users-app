const express = require("express");
const router = express.Router();
const upload = require("../helpers/singleAvatar")
const authRouter = require("../controllers/auth")


// Log in
// Kullanıcı giriş formu
router.get("/login", authRouter.get_login);
// Kuallnıcı giriş post kullanıcı oluşturma
router.post("/login", authRouter.post_login);


// Register
// Kullanıcıya kayıt formunu gösterme
router.get("/register", authRouter.get_register);
// Yeni kullanıcı oluşturma
router.post("/register", upload.single("profile"), authRouter.post_register);


// Log out
router.get("/logout", authRouter.get_logout);

module.exports = router