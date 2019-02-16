const  express = require('express');
const bodyParser = require("body-parser");



const app = express();
const port = 8080;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get("/classes/:term", (req, res)=>{

});


app.listen(port, () => console.log(`Example app listening on port ${port}! WOOOO HOOO`));