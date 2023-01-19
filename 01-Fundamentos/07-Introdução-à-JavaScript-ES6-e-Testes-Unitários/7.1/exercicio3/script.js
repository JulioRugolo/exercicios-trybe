const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const updateList = (object, newKey, novoValor) => {
    object[newKey] = novoValor;
}

let newKey = 'turno';
let novoValor = 'noite';

updateList(lesson2, newKey, novoValor);
console.log(lesson2);

const keysObject = (object) => {
    console.log(Object.keys(object));
}

// keysObject(lesson3);

const lengthObject = (object) => {
    const objectLength = Object.keys(object).length
    console.log(objectLength);
}

lengthObject(lesson1);

const valuesOfObject = (object) => {
    console.log(Object.values(object));
}

valuesOfObject(lesson2);

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(allLessons);

const arrayObject = Object.keys(allLessons);

console.log(arrayObject);

const sumStudents = () => {
    let sum = 0;
    for (let index = 0; index < arrayObject.length; index++) {
       sum += allLessons[`${arrayObject[index]}`].numeroEstudantes;
    }
    console.log(sum);
}

sumStudents();

const getValueByNumber = (object, position) => {
    const arrayValueObject = Object.keys(object);
    console.log(object[`${arrayValueObject[position]}`]);
}

getValueByNumber(lesson2, 3);

newKey = 'turno';
novoValor = 'noite'

const verifyKeyValueOfObject = (object, newKey, novoValor) => {
    const verifyKey = Object.keys(object).includes(newKey);
    const verifyValue = Object.values(object).includes(novoValor);
    if (verifyKey == true && verifyValue == true) {
        console.log('true');        
    } else {
        console.log('false');
    }
}

verifyKeyValueOfObject(lesson1, 'turno', 'noite');