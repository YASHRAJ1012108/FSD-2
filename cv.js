import validator from "validator"
import chalk from 'chalk'
const log=console.log
var test=chalk.red.underline.bold.bgYellow("Hello kaise ho");
log(test)
log(validator.isEmpty(""),validator.isLowercase(test));
log(chalk.red(validator.isEmpty(test)));