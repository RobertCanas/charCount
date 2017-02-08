function countLetter(str){
  var noSpaces = str.split(" ").join("");
  var obj = {}

for (var i = 0; i < str.length - 1; i++) {
  var letter = noSpaces.charAt(i);
  obj[letter] = (isNaN(obj[letter]) ? 1 : obj[letter] + 1);
}
    return obj;
}

console.log(countLetter("light house"));
