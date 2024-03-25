const express = require("express");
const router = express.Router();
const upload = require("../helpers/singleAvatar")
const userRouter = require("../controllers/userRouter")
const auth = require("../middleware/auth")

router.use(auth)

// Update
// Kullanıcıyı ID'ye göre güncelleme işlemi için çağırma
router.get("/update/:url", userRouter.get_update_url);
// Kullanıcıyı ID'ye göre güncelleme işlemi
router.post("/update/:url", upload.single("profile"), userRouter.post_update_url);


// Delete
// Kullanıcıyı ID'ye göre silme işlemi için çağırma
router.get("/delete/:url", userRouter.get_delete_url);
// Kullanıcıyı ID'ye göre silme işlemi için çağırma
router.post("/delete/:url", userRouter.post_delete_url);


// Users List
// Kullanıcıyı ID'ye göre Form içerisinde getirme
router.get("/user/:url", userRouter.get_user_url);
// Tüm kullanıcıları birer Form içerisinde getirme
router.get("/users", userRouter.get_users);


module.exports = router