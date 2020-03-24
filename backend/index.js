const express = require('express')

const app = express();

app.listen(3333);

app.get('/', (req, resp)=>{
    return resp.json({appName: "No Lines", message: "Comming Soon"})
});