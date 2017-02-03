/**
 * Created by Reiker on 1/30/17.
 */

console.log("The landing page is now running");

let express = require('express'),
    app = express();
let static = require('serve-static');

//app.configure(function(){
app.set('views', __dirname + '/../site/views');
app.use('/public', express.static(__dirname + '/public'));
// app.use("/css", express.static(__dirname + '../node/css/'));
// app.use("/javascript", express.static(__dirname + '../node/javascript/'));

let Twig = require('twig');

Twig.cache(false);

app.set('view engine', 'twig');

// This section is optional and can be used to configure twig.
app.set('twig options', {
    strict_variables: false
});
//});

app.get('/', function(req, res){
    res.render('test', {
        message : "Hello World"
    });

    console.log("A user has arrived at the landing page");
});

app.get('/testing', function(req, res){
    res.render('main', {
        message : "Hello World"
    });
    console.log("A user has arrived at the testing page");
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.listen(15000);
