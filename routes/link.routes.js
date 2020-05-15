const {Router} = require('express')
const config = require('config')
const shortId = require('shortid')
const Link = require('../Models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()

// /generate
router.post('/generate', auth, async (req, res) => {
    try {
        const baseUrl = config.get('baseUrl')
        const {from} = req.body

        // Generate uniq
        const code = shortId.generate()

        // Check if likn exists with same "from"
        const existing = await Link.findOne({from})
        if (existing) {
            return res.json({link: existing})
        }

        // Create new Link
        const to = baseUrl + /t/ + code
        const link = new Link({
            code, to, from, owner: req.user.userId
        })
        await link.save()

        res.status(201).json({link})

    } catch (e) {
        res.status(500).json({message: 'ERROR'})
    }
})

router.get('/', auth, async (req, res) => {
    // "auth" adds req.user - user auth object
    try {
        const links = await Link.find({owner: req.user.userId})
        res.json(links)

    } catch (e) {
        res.status(500).json({message: 'ERROR'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const links = await Link.findById(req.params.id) // ???
        res.json(links)

    } catch (e) {
        res.status(500).json({message: 'ERROR'})
    }
})

module.exports = router