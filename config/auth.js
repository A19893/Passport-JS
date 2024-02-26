const passport = require("passport");
const users_model = require("../models/user");
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy ({
    usernameField: 'email',
} ,async(email, password, done)=>{
    const user = await users_model.findOne({email: email});
    if(user){
     const isPasswordMatch = user.password ==  password;
     if(!isPasswordMatch){
        return done(null, false, { message: "Incorrect password" });
     }
     else{
        return done(null, user);
     }
    }
    else{
        return done(null, false, { message: "User not found" });
    }
}))

module.exports = passport;