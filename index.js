const express = require('express');
const { engine } = require('express-handlebars');
const  route  = require('./src/routes/homeroute');
const accountroute = require('./src/routes/routeraccount');


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');// set view engine la handlebars
app.set('views', './src/views');



app.use('/',route);
app.use('/',accountroute);

// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })

app.listen(3000, () => {
    console.log("app dang chay tren port 3000");
})