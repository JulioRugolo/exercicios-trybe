function techList(array, nome) {
  array.sort();
  const arrayOfTech = [];
  for (let index = 0; index < array.length; index++) {
    const newObject = {'tech':array[index], 'name': nome}
    arrayOfTech.push(newObject)
  }
  return arrayOfTech;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;