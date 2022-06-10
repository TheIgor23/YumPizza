const express = require('express');
const path = require('path');
const serverRoutes = require('./routes/servers.js');

const bodyParser = require('body-parser');



const PORT = process.env.PORT ?? 3000;
const app = express();





app.use(bodyParser.json());
app.use(serverRoutes);
app.use(express.static(path.resolve(__dirname, 'static')))



app.listen(PORT, ()=>{
    console.log(`Server work on port ${PORT}...`)
});
