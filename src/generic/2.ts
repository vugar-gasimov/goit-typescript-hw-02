/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, K extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<K, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

let topObj: AllType = {
  name: "box",
  position: 73,
  color: "brown",
  weight: 5,
};

let bottomObj: AllType = {
  name: "ball",
  position: 42,
  color: "white",
  weight: 10,
};

const result: AllType = compare(topObj, bottomObj);
console.log(result);

export {};
