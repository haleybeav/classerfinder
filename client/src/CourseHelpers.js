
export const courseInList = (crn, list) =>{
    let result = false;
    for(let i =0; i < list.length; i++){
        if(crn === list[i].crn){
            result = true;
            break;
        }
    }
    return result;
}

export const getIndexByCRN = (crn, list) =>{
    let result = -1;
    for(let i =0; i < list.length; i++){
        if(crn === list[i].crn){
            result = i;
            break;
        }
    }
    return result;
}