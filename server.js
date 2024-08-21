const express = require('express');
const passport = require ('passport')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const passportLocal = require('passport-local').Strategy;

app.use(express.urlencoded)
app.use(cookieParser('mi ultrasecreto'));
app.use(session({
    secret: 'mi ultrasecreto',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(function(username, password, done){
    if(username === 'admin' && password === 'admin'){
        return done(null, {id: 1, name: 'admin'});
    }
    done(null, false);
}))
//Serialización
passport.serializeUser(function(user,done){
    done(null,user.id);
})
//Deserialización
passport.deserializeUser(function(id,done){
    done(null, {id: 1, name: 'admin'})
})

app.set('view engine', 'js');

app.get("/", (req,res,next)=>{
    if(req.isAuthenticated()) return(next());
    res.redirect("/login");
}, (req, res) => {
    //Si ya se inició sesión mostrar la pagina principal
    res.send("Home page");

    //Si no se ha iniciado sesión mostrar la pagina de login
    res.send("Hola")
});

app.get ("/login", (req, res) => {
    res.render("Login");
});

app.post ("/login", passport.authenticate('local',{
    succesRedirect: "/",
    failureRedirect: "/login"
}));
app.listen(3000, () => console.log('Servidor iniciado'));