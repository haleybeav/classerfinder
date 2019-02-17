const classes = require("./classes_with_description");
const fs = require('fs');


const index = "class";
const type = "classlist";



var stream = fs.createWriteStream("classes_bulk.json", {flags:'a'});

for(let i = 0; i< classes.length; i++ ){
    const place = {"index":{"_index": index, "_type": type, "_id": i}}
    const data = classes[i];
    var placejson = JSON.stringify(place);
    var datajson = JSON.stringify(data);
    stream.write(placejson + "\n" + datajson + "\n");
}