const {Router} = require('express')
const Link = require('../Models/Link')
const router = Router()

// /generate
router.get('/:code', async (req, res) => {
    try {
        const link = await Link.findOne({code: req.params.code})

        if (link) {
            link.clicks++
            await link.save()
            return res.redirect(link.from)
        }

        res.status(404).json({message: 'Requested link does not exist'})

    } catch (e) {
        res.status(500).json({message: 'There is an error somewhere there'})
    }

})


module.exports = router