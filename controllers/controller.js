const path = require('path');

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

const upfile = (req, res) => {
    let name = req.file.originalname;
    let type = req.file.mimetype;
    let size = req.file.size;
    res.json({ 'name': name, 'type': type, 'size': size });
}

module.exports = { index, upfile };