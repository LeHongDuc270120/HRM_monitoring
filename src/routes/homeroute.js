const ex = require('express');

const router = ex.Router(); 

router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;