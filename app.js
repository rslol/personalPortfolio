  var express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      methodOverride = require('method-override'),
      expressSanitizer = require('express-sanitizer');
     

mongoose.connect('mongodb://localhost/personal_portfolio');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());


var portfolioSchema = new mongoose.Schema ({
  title: String,
  image: String,
  body: String,
  author: String, 
  created: {type: Date, default: Date.now}
});

var Portfolio = mongoose.model('Portfolio', portfolioSchema);

//Landing
app.get('/', function(req,res){
  res.redirect('/landing');
});

app.get('/landing', function(req,res){
  res.render('landing');
});

//Index
app.get('/index', function(req,res){
  res.render('index');
});

//About
app.get('/about', function(req,res){
  res.render('about');
});

//Contact
app.get('/contact', function(req,res){
  res.render('contact');
})






app.listen(3000, function(){
  console.log("Portfolio connected");
});