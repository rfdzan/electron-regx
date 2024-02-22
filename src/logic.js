const Lodash = require('lodash');
class returnFlag {
  constructor(flag) {
    this.flag = flag;
  }
  getFlag() {
    const output = {
      g: {gFlag: true, iFlag: false},
      i: {gFlag: false, iFlag: true},
      ig: {gFlag: true, iFlag: true},
    };
    for (const [returnString, member] of Object.entries(output)) {
      if (Lodash.isEqual(this.flag, member)) {
        return returnString; }
    }
    return 'i';
  }
}
function regxMain(user) {
  const getFlag = new returnFlag(user.flag);
  console.log(typeof(getFlag.getFlag()));
  console.log(typeof(user.text));
  console.log(typeof(user.pattern))
  const re = new RegExp(user.pattern, getFlag.getFlag());
  const result = user.text.match(re);
  console.log(result);
  if (result != null) {
    return result.join(', ');
  } else {
    return 'Processing...';
  }
}
function userRegexSanitizer(Regex) {
  const re = new RegExp(/\\/, 'gi');
  return Regex.replace(re, '\\');
}
/**
* Processes user input and returns the result of regex
*/
export function getUserInputs(gFlagButton, iFlagButton, userText, userRegex) {
  const flagButtonStatus = {
    gFlag: gFlagButton,
    iFlag: iFlagButton,
  };
  console.log(userRegex);
  const sanitizedRegex = userRegexSanitizer(userRegex);
  const userR = {
    pattern: sanitizedRegex,
    text: userText,
    flag: flagButtonStatus,
  };
  console.log(userR);
  return regxMain(userR);
}
