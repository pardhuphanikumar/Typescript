document.getElementById("app").innerHTML = `
<h1>Type Guards!</h1>
<div id="result">

</div>
`;

interface Person {
  id: string;
  name: string;
  gender: string;
}

interface Animal {
  id: string;
  name: string;
  legs?: number;
  tail: boolean;
}

type PersonOrAnimal = Person | Animal;

const randomBool = (): boolean => Boolean(Math.round(Math.random()));

const randomPerson = () =>
  ({
    id: "437896J",
    name: "Antonio",
    gender: "Male"
  } as Person);

const randomAnimal = () =>
  ({
    id: "AAAA",
    name: "Sinpa",
    legs: 3,
    tail: true
  } as Animal);

const getPersonOrAnimal = (): PersonOrAnimal =>
  randomBool() ? randomPerson() : randomAnimal();

const something = getPersonOrAnimal();

const isType = <T>(
  variableToCheck: NonNullable<Object>,
  attr: keyof T
): variableToCheck is T => attr in variableToCheck;

if (isType<Person>(something, "gender")) {
  document.getElementById("result").innerHTML = `Person with id: ${
    something.id
  }`;
} else {
  document.getElementById("result").innerHTML = `Animal with tail?: ${
    something.tail
  }`;
}
