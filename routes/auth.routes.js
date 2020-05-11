const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../Models/User')
const router = Router()

// /api/auth/register
router.post('/register',
    [
        check('email', 'E-mail is not valid').isEmail(),
        check('password', 'Password is too weak (less then 6 symbols)').isLength({min: 6}),
    ],
    async (req, res) => {
        try {
            console.log('Body:', req.body)
            // Validation
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Registration data is incorrect',
                    errors: errors.array()
                })
            }

            // Check email is occupied
            const {email, password} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: 'Such user already exists'})
            }

            // Create new User
            const passwordHash = await bcrypt.hash(password, 89346)
            const user = new User({email: email, password: passwordHash})
            await user.save()
            res.status(201).json({message: 'User created successfully'})

        } catch (e) {
            res.status(500).json({message: 'There is an error somewhere there'})
        }
    })

// /api/auth/login
router.post('/login', [
        check('email', 'E-mail is not valid').normalizeEmail().isEmail(),
        check('password', 'Password is empty').exists(),
    ],
    async (req, res) => {
        try {
            // Validation
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Login data is incorrect',
                    errors: errors.array()
                })
            }

            // Check user exists and password
            const {email, password} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: 'Login failed'})
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({message: 'Login failed'})
            }

            // If User checked
            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id});

        } catch (e) {
            res.status(500).json({message: 'There is an error somewhere there'})
        }
    })

module.exports = router