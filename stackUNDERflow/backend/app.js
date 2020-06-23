const express = require('express');
const app = express()
const port = 5000

app.post('/login/:username/:password', (req, res) => {
    if(req.params.username=="IAmRaGa" && req.params.password=="potato-gold"){
        res.send('allowed')
    }
    else{
        res.send('not allowed')
    }
    })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))