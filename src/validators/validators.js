const {default: mongoose} = require('mongoose')


const isValidEmail = function (mail) {
    if (/^[a-z0-9_]{2,}@[a-z]{3,}.[com]{3}$/.test(mail)) {
    return true;
    }
}
const isValidMobile=function(mobile){
    if(/^[0-9]\d{9}$/.test(mobile)){
        return true
    }
}

const isValidName=function(name){
    if(/^[a-z ]{2,50}$/i.test(name)){
        return true
    }
}

const isValidId = function (data) {
    return mongoose.Types.ObjectId.isValid(data);
  };

const isValidShortName=function(name){
    if(/^[a-z]{2,20}$/i.test(name)){
        return true
    }
}
const isValidFullName=function(fullname){
    if(/^[a-z ,&-]{2,200}$/i.test(fullname)){
        return true
    }
}
const isValidLink=function(link){
    if(/^(http[s]?:\/\/.*\.(?:png|jpeg))$/g.test(link)){
        return true
    }
}


  module.exports={isValidEmail,isValidId,isValidMobile,isValidName,isValidShortName,isValidFullName,isValidLink}