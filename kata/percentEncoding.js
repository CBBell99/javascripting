const urlEncode = function (text) {
  text = text.trim();
  let space = ' ';
  let newString = ''
  let replaceSpace = '%20'
  for (let i = 0; i < text.length; i++) {
    if (text[i] === space) {
      newString += replaceSpace;
    } else {
      newString += text[i];
    }
  }
  return newString;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));