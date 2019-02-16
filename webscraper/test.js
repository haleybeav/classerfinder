
function buildTimeObj(string){
    
    obj = {
        M: null,
        T: null,
        W: null,
        R: null,
        F: null,
    }

    if (string == "TBA"){
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

        if (ehrs - shrs > 12){
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
