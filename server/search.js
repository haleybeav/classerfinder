const  express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
const cors = require('cors')

const app = express();
const port = 8080;

app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});


app.get("/classes/:term", async (req, res)=>{

    const response = await client.search({
        index: 'class',
        type: 'classlist',
        body: {
            "from" : 0,
            "size" : 20,
            "explain" : true,
             "query": {
                "multi_match" : {
                   "query" : req.params.term,
                   "fields" : ["dept^5", "course^4", "title^3", "description^2.5", "crn^2", "instructor^1.5", "location"],
                   "fuzziness": "AUTO"
                }
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
