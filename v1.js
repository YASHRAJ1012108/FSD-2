import validator from "validator"
var e1="test@mail.commmmmmmmmmm.in";
const log=console.log
log(validator.isEmail(e1));
var e2 ="";
log(validator.isEmpty(e2));
var e3="test";
log(validator.isLowercase(e3));