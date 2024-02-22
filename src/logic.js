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
      if (Lodash.isEqual(member, output)) {
        return returnString; }
    }
    return 'i';
  }
}
function regxMain(user, show ) {
  const getFlag = new returnFlag(user.flag);
  console.log(getFlag.getFlag());
  const re = RegExp(user.pattern, getFlag.getFlag());
  const result = user.text.match(re);
  if (result != null) {
    return result.join(', ');
  } else {
    return 'Processing...';
  }
}
function userRegexSanitizer(Regex) {
  const re = new RegExp(/\\/, 'gi');
  return Regex.replace(re, '\\\\');
}
export function getUserInputs(gFlagButton, iFlagButton, userText, userRegex) {
  const flagButtonStatus = {
    gFlag: gFlagButton.checked,
    iFlag: iFlagButton.checked,
  };
  const sanitizedRegex = userRegexSanitizer(userRegex.value);
  const userR = {
    pattern: sanitizedRegex,
    text: userText.value,
    flag: flagButtonStatus,
  };
  return regxMain(userR, show);
}
