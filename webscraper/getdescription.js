const puppeteer = require('puppeteer');
const classes = require("./classes");


const CFURL = "https://admin.wwu.edu/pls/wwis/wwsktime.SelText?subj_crse=";

let classList = [];

let found = {};

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    for(let i = 0; i < classes.length; i++ ){
        if(found[classes[i].dept + classes[i].course]){

        }else{
            let ending = "201920" + classes[i].dept + classes[i].course;
            await page.goto(CFURL + ending, {waitUntil: 'networkidle2'});
            const body = await page.$("body");
            let description =  await page.evaluate(element => element.textContent, body);
            description = description.replace('Close window', '');
            description = description.replace(classes[i].dept + " "+classes[i].course, '');
            description = description.replace('\n', '');
       
            found[classes[i].dept + classes[i].course] = description;
        }
        classes[i].description = found[classes[i].dept + classes[i].course];
        classList.push(classes[i]);
    }

    var json = JSON.stringify(classList);
    var fs = require('fs');
    fs.writeFile('classes_with_description.json', json, 'utf8',async ()=>{
        await browser.close();
    });

})();