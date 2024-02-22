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
    for (const [s, member] of Object.entries(output)) {
      if (Lodash.isEqual(member, output)) {
        return s;
      }
    }
    return 'i';
  }
}
function regexMain(user ) {
  const getFlag = new returnFlag(user.flag);
  console.log(getFlag.getFlag());
  const re = RegExp(user.pattern, getFlag.getFlag());
  const result = user.text.match(re);
  const show = document.getElementById('resultBox');
  if (result != null) {
    show.innerText = result.join(', ');
  } else {
    show.innerText = 'Processing...';
  }
}
function userRegexSanitizer(Regex) {
  const re = new RegExp(/\\/, 'gi');
  return Regex.replace(re, '\\\\');
}
function getUserInputs() {
  const gFlagButton = document.getElementById('gFlag');
  const iFlagButton = document.getElementById('iFlag');
  const flagButtonStatus = {
    gFlag: gFlagButton.checked,
    iFlag: iFlagButton.checked,
  };
  const userText = document.getElementById('userText');
  const userRegex = document.getElementById('userRegex');
  const sanitizedRegex = userRegexSanitizer(userRegex.value);
  const userR = {
    pattern: sanitizedRegex,
    text: userText.value,
    flag: flagButtonStatus,
  };
  const processUserRequest = regexMain(userR);
  // if (userText != null) {
  // 	console.log(userText.value);
  // }
  // if (userRegex != null) {
  // 	console.log(userRegex.value);
  // }
}
getUserInputs();
// setInterval(getUserInputs, 1000);
