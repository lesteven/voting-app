//server
var express = require('express');
var methodOverride = require('method-override')
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

//database
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/vote'
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
	console.log('connected correctly to server');
})

//passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/register');
app.use(require('express-session')({
	secret: '9054f3048dgfd',
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//routers
var userRouter = require('./routes/userRouter');
var pollRouter = require('./routes/pollRouter');

app.use(methodOverride('_method'))

app.use('/',express.static(__dirname + '/public'));

app.use('/reglog',express.static(__dirname + '/public/reglog.html'));

app.use('/users',userRouter);

app.use('/mypolls',function(req,res,next){
	if(!req.user){
		res.redirect('reglog')
	}
	else{
		next()
	}
});
app.use('/mypolls',express.static(__dirname + '/public/mypolls.html'));

app.use('/polls', pollRouter);

//app.use('/polls',express.static(__dirname + '/public/pollChart.html'));


app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})

