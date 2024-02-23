/** 
* A helper class to fetch relevant UI elements.
*/
export class fetchUIElements {
  /** 
  * @type {document}
  */
  document
  constructor(document) {
    this.document = document;
  }
  /**
  * Fetch flag checkboxes from the DOM.
  * @param {void}
  * @returns {[boolean, boolean]}
  * [gFlag, iFlag] Returns the boolean value of the flags.
  */
  getCheckBoxes() {
    let gFlag = this.document.getElementById('gFlag');
    let iFlag = this.document.getElementById('iFlag');
    if (gFlag == null || iFlag == null){
      console.log(`fetchUIElements.getCheckBoxes:\n gFlag: ${gFlag}\niFlag: ${iFlag}`);
    }
    return [gFlag.checked, iFlag.checked];
  }
  /** 
  * Fetch the value text and regex input fields.
  * @param {void}
  * @returns {[string, string]}
  * [userText, userRegex] Returns userText and userRegex value as strings.
  */
  getInputFields() {
    let userText = this.document.getElementById('userText');
    let userRegex = this.document.getElementById('userRegex');
    if (userText == null || userRegex == null) {
      console.log(`fetchUIElements.getInputFields: \nuserText: ${userText}\nuserRegex: ${userRegex}`);
    }
    return [userText.value, userRegex.value];
  }
}
