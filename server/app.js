const  express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');


const app = express();
const port = 8080;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});


app.get("/classes/:term", async (req, res)=>{

    const response = await client.searchTemplate({
        index: 'class',
        type: 'classlist',
        body: {        
            "source" : {
                "query": {
                    "multi_match" : {
                        "query" : "{{my_query}}",
                        "fields" : ["dept^10", "course^9", "title^8", "crn", "instructor^7", "location"],
                        "fuzziness": "AUTO"
                    }
                }
            },
            "params" : {       
                "my_query" : req.params.term
            }        
        }
    });
    
    let outResults = [];

    response.hits.hits.forEach((item)=>{
        outResults.push(item._source);
    })

    res.send(outResults);
});


app.listen(port, () => console.log(`Example app listening on port ${port}! WOOOO HOOO`));