const multer = require("multer")
const path = require("path")

// Rastgele değerler için uuid modulunu kullanabilirsiniz
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './usersProfilles')
    },
    filename: function (req, file, cb) {
        cb(null, path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname))

    }
})

const upload = multer({ storage: storage })

module.exports = upload
