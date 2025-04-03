const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/images/' + file.fieldname);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '-' + file.originalname;
        cb(null, uniqueSuffix);
    }
});
const upload = multer({ storage: storage });
module.exports = upload;