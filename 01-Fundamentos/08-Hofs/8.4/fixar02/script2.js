
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const userInfo = { ...user, ...jobInfos };
const {
    name,
    age,
    nationality,
    profession,
    squad,
    squadInitials,
} = userInfo;
// Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);