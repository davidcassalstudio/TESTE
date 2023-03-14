const express = require('express');
const router  = express();

router.get('/', (req,res,next) => {
    res.send('Foi erro meu')
})

module.exports = router;