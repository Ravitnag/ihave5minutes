const express = require('express');
const router = express.Router();

router.get('/getGoals', async (req, res) => {

    try {
      
        res.json(["לנקות לפסח", "ללמוד רוסית"])

    }
    catch (err) {

        console.log(err.stack);
        res.status(500).json({ status: false })
    }

})

module.exports = router