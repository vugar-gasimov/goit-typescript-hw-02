/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// 1

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const merged: {
  name: string;
} & {
  age: number;
} = merge({ name: "Alice" }, { age: 25 });

merged.name;

// 2

// function merge<T, U>(objA: T, objB: U): T & U {
//   // return Object.assign(objA, objB);
//   return { ...objA, ...objB };
// }

// const merged = merge({ name: "Alice" }, { age: 25 });

// merged.name;

// 3

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alice" }, { age: 25 }) as {
//   name: string;
//   age: number;
// };

// merged.name;

export {};
