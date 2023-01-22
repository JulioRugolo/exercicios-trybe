function hydrate(string) {
  const numbersInString = string.match(/\d+/g);
  let totalNumbers = 0;
  let stringWater = '';
  for (let index = 0; index < numbersInString.length; index++) {
   totalNumbers += parseInt(numbersInString[index]); 
   console.log(totalNumbers);
  }
  if (totalNumbers > 1) {
    stringWater = `${totalNumbers} copos de água`
  } else {
    stringWater = '1 copo de água';

  }
  return stringWater
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;