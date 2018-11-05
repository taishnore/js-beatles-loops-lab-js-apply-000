function theBeatlesPlay(musicians, instruments) {
  let final = [];
  for (let i = 0; i < musicians.length; i++) {
    final.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return final
}

function johnLennonFacts(array) {
  let i = 0;
  let newArray = [];
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`);
    i++;
  } return newArray
}

function iLoveTheBeatles(number) {
  let moreLove = [];
  let i = 0
  if (number < 15) {
    do {
      moreLove.push("I love the Beatles!");
      i++;
    } 
    while ((number + i) < 15);
    return moreLove
} else {
  moreLove.push("I love the Beatles!");
  return moreLove
  }
}