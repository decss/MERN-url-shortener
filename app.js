console.log('Start application')

const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 5000
const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('  Connected to database')

        app.listen(PORT, () => console.log(`  Listening port ${PORT} ...`))
    } catch (e) {
        console.log(`Server Error:`, e.message)
        process.exit(1);
    }
}

start()