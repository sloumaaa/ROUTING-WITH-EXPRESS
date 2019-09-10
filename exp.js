const express = require('express')
const app = express()

// app.get('/Home', (req, res) => {
//     res.sendFile(__dirname + '/home.html')
// })

// app.get('/Ourservices', (req, res) => {
//     res.sendFile(__dirname + '/ourservices.html')
// })

// app.get('/Contact', (req, res) => {
//     res.sendFile(__dirname + '/contact.html')
// })

app.use(date = (req, res, next) => {
    let requestAt = new Date()
    let heur = requestAt.getHours();
    console.log(heur)
    if (heur >= 8 && heur <= 17) {
        app.use(express.static(__dirname + '/conteneur'))
    }
    else {
        res.send("Our office is not open now")
    }
    next()
})

// app.use(express.static(__dirname + '/conteneur'))


app.listen(3000, (err) => {
    if (err) {
        console.log('server is not running')
    }
    else {
        console.log('server is running on port 3000')
    }
})