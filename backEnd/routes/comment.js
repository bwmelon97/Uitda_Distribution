/* Module load */
let express = require('express');
let router = express.Router();
let comment = require('../lib/comment');

router.get('/:id', function (req, res) {
    comment.comment(req, res);
});

module.exports = router;
