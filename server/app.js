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


const response = await client.search({
    index: 'class',
    type: 'classlist',
    body: {
        query: {
            match: {
            body: 'elasticsearch'
            }
        }
    }
});

for (const tweet of response.hits.hits) {
    console.log('tweet:', tweet);
}

app.get("/classes/:term", (req, res)=>{

});


//app.listen(port, () => console.log(`Example app listening on port ${port}! WOOOO HOOO`));