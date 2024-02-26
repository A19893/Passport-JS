const users_model = require("../models/user");

const signup = async(payload)=>{
try{
const response = await users_model.create(payload);
return response;
}
catch(error){
    throw error;
}
}

const login = async(payload)=>{
try{
    const response = await users_model.findOne({email: payload.email});
    return response;
}
catch(error){
    throw error;
}
}

module.exports = {
    signup,
    login
}