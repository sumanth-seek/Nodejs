const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes")
const port = 7000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(port, function(){
    console.log('app listening on port: '+port);
});

