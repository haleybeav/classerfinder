const puppeteer = require('puppeteer');


const CFURL = "https://admin.wwu.edu/pls/wwis/wwsktime.SelClass";


let classList = [];

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(CFURL, {waitUntil: 'networkidle2'});
    
    await page.click('[value="Search Now"]');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    
    const classes = await page.$$("tbody");
    const classblock = classes[1];
    const classtr = await classblock.$$("tr");

    let i =3
    while( i < classtr.length){
        let record = {};
        
        found = false;

        let hasAlign =  await page.evaluate(element => element.getAttribute("align"), classtr[i]);
        const rowOne = await classtr[i].$$("td");
        if(rowOne && rowOne.length > 6 && !hasAlign){
            const classname = await rowOne[1].$("a");
            if(classname){
                found = true;
            }            
        }

        if(found){
                //class "ACCT 240"
            const rowOne = await classtr[i].$$("td");
            const classname = await rowOne[1].$("a");
            
            record.classname =  await page.evaluate(element => element.textContent, classname);

            //title "Financial Accounting"
            const titleel = await rowOne[2].$("font");
            record.title =  await page.evaluate(element => element.textContent, titleel);


            //CRN "20001"
            const crnel = await rowOne[3].$("input");
            record.crn =  await page.evaluate(element => element.getAttribute("value"), crnel);


            //cap 55
            const capel = await rowOne[4].$("font");
            record.cap =  await page.evaluate(element => element.textContent, capel);
            //enrl 0
            const enrlel = await rowOne[5].$("font");
            record.enrl =  await page.evaluate(element => element.textContent, enrlel);

            //instructor
            const instructorel = await rowOne[7].$("font");
            record.instructor =  await page.evaluate(element => element.textContent, instructorel);


            const rowTwo = await classtr[i + 1].$$("td");
            //time
            const timeel = await rowTwo[2].$("font");
            record.time =  await page.evaluate(element => element.textContent, timeel);

            //location
            const locationel = await rowTwo[3].$("font");
            record.location =  await page.evaluate(element => element.textContent, locationel);

            //credits    
            const creditel = await rowTwo[3].$("font");
            record.credits =  await page.evaluate(element => element.textContent, creditel);
            classList.push(record);
            i = i + 3;
        }else{
            i++;
        }
        
        
    }


    var json = JSON.stringify(classList);
    var fs = require('fs');
    fs.writeFile('classes.json', json, 'utf8',async ()=>{
        await browser.close();
    });
    

})();