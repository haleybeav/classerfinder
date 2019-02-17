const puppeteer = require('puppeteer');


const CFURL = "https://admin.wwu.edu/pls/wwis/wwsktime.SelClass";


let classList = [];


function buildTimeObj(string){

    obj = {
        TBA: false,
        M: null,
        T: null,
        W: null,
        R: null,
        F: null,
    }

    if (string == "TBA"){
        obj.TBA = true;
        return obj;
    }

    let words = string.split(" ");
    let days = words[1];
    let ending = words[4];

    let times =  words[3].split("-");

    if (ending == "pm"){
        
        let ehrs =  times[1].split(":")[0];
        let emins =  times[1].split(":")[1];
        ehrs = parseInt(ehrs);
        ehrs = ehrs + 12;

        let shrs = times[0].split(":")[0];
        let smins =  times[0].split(":")[1];
        shrs = parseInt(shrs);

        if (ehrs - shrs >= 12){
            shrs = shrs + 12;
        }
        times[0] = shrs + ":" + smins;
        times[1] = ehrs + ":" + emins;

    }

    for(let i = 0; i < days.length; i++){
        obj[days[i]] = [times[0], times[1]];
    }

    return obj;
}


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

            let classnametext =  await page.evaluate(element => element.textContent, classname);

            record.dept = classnametext.split(" ")[0];
            record.course = classnametext.split(" ")[1];

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

            let name =  await page.evaluate(element => element.textContent, instructorel);
            name = name.split(",");
            record.firstname = name[1];
            record.lastname = name[0];

            const rowTwo = await classtr[i + 1].$$("td");

            //
            const gurel = await rowTwo[1].$("font");
            const gurtext =  await page.evaluate(element => element.textContent, gurel);

            let gurArray = gurtext.split(" ");
            record.gur = gurArray.filter( (el)=> {
                return el != "";
            });


            //time
            const timeel = await rowTwo[2].$("font");
            let timeString = await page.evaluate(element => element.textContent, timeel);
            record.time =  buildTimeObj(timeString);

            //location
            const locationel = await rowTwo[3].$("font");
            record.location =  await page.evaluate(element => element.textContent, locationel);

            //credits
            const creditel = await rowTwo[4].$("font");
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
