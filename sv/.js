/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/


import express from 'express'
import {fileURLToPath} from 'url'
import path from "path";


const app = express()
const __filename = fileURLToPath(import.meta.url);
let dirName = path.dirname(__filename)
app.set('view engine','hbs')


app.get('/css/:name', (req, res) => {
    try {
       return res.status(200).sendFile(path.resolve(dirName, './assets/css/' + req.params.name))
    } catch (error) {
        log(error)
        return res.sendStatus(304)
    }
})



app.get('/img/:name', (req, res) => {
    try {
       return res.status(200).sendFile(path.resolve(dirName, './assets/img/' + req.params.name))
    } catch (error) {
        log(error)
        return res.sendStatus(304)
    }
})


app.get('*',(req, res) => res.render('Home') )



app.listen(4000)

