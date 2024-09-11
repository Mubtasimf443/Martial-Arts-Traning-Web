/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import {resolve,dirname} from 'path'
import {log} from 'console'
import fs from 'fs'
import {fileURLToPath} from 'url'

let __dirname = dirname(fileURLToPath(import.meta.url))


async function getFile(array,path) {
    let data ='';
    await array.forEach(async el => {
        let filePath = resolve(__dirname ,'./public/' + path + '/' + el );
        let d = await fs.readFileSync(filePath,'utf8' );
        data = data + d
         }
        );
    fs.writeFileSync(resolve(__dirname,'./' + Date.now() + '.' + path), data)
}
let cssArray =['root.css','loader.css' ,'footer.css', 'header.css','hero.css','mobile.css','style.css','tablet.css'] 
let jsArray = [ 'loader.js' ,'header.js', 'hero.video.js','HomeLoaderAndPopup.js','counter.js']
getFile(cssArray,'css')
getFile(jsArray,'js')












