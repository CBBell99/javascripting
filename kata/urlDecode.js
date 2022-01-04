const urlDecode = function (text) {
  let result = {}
  let newText = text.replace(/%20/g, ' ').split(/[&=]/g);
  for (let i = 0; i < newText.length; i += 2) {
    result[newText[i]] = newText[i + 1]
  }
  return result
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);