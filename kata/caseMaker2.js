const camelCase = function (input) {
  let camelString = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      camelString = input.replace(' ' + input[i + 1], input[i + 1].toUpperCase());
      input = camelString;
    }

  }
  return camelString;
};


const pascalCase = function (input) {
  let pascalString = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] = ' ') {
      pascalString = input.replace(' ' + input[i + 1], `${input[i + 1]}`.toUpperCase());
      input = pascalString;
    }
  }
  return pascalString.replace(pascalString[0], pascalString[0].toUpperCase());;
}


const snakeCase = function (input) {
  let regex = /[\s]/g;
  return input.replace(regex, '_');
}


const kebabCase = function (input) {
  let regex = /[\s]/g;
  return input.replace(regex, '-');
};

const titleCase = function (input) {
  let titleString = input;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      titleString = input.replace(' ' + input[i + 1], ` ${input[i + 1]}`.toUpperCase());
      input = titleString;
    }
  }
  return titleString.replace(titleString[0], titleString[0].toUpperCase());
}


const vowelCase = function (input) {
  let vowelString = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      vowelString += input[i].toUpperCase();
    } else {
      vowelString += input[i]
    }
  }
  return vowelString;
}


const consonantCase = function (input) {
  let consonantString = '';
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] !== "a" &&
      input[i] !== "e" &&
      input[i] !== "i" &&
      input[i] !== 'o' &&
      input[i] !== "u"
    ) {
      consonantString += input[i].toUpperCase();
    } else {
      consonantString += input[i];
    }
  }

  return consonantString;
};

const lowerCase = function (input) {
  return input.toLowerCase();
}


const upperCase = function (input) {
  return input.toUpperCase();
}

const makeCase = function (input, format) {
  if (typeof format !== 'object') {
    format = [format];
  }

  if (format.length > 1) {
    const precedence = [
      ['camel', 'pascal', 'snake', 'kebab', 'title'],
      ['vowel', 'consonant'],
      ['lower', 'upper']
    ];
    format.sort((a, b) => precedence.indexOf(a) - precedence.indexOf(b))
  }
  for (style of format)
    switch (style) {
      case 'camel': input = camelCase(input);
        break;
      case 'pascal': input = pascalCase(input);
        break;
      case 'snake': input = snakeCase(input);
        break;
      case 'kebab': input = kebabCase(input);
        break;
      case 'title': input = titleCase(input);
        break;
      case 'vowel': input = vowelCase(input);
        break;
      case 'consonant': input = consonantCase(input);
        break;
      case 'lower': input = lowerCase
        break;
      case 'upper': input = upperCase(input);
    }
  return input
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));