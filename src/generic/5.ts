/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair {
  key: string | number;
  value: string | number;
}

const box: KeyValuePair = {
  key: "boxKey",
  value: "boxValue",
};

const ball: KeyValuePair = {
  key: 1234,
  value: "ballValue",
};

// interface KeyValuePair<K, V> {
//   key: K;
//   value: V;
// }

// const box: KeyValuePair<string, number> = { key: "boxKey", value: 1234 };
// const ball: KeyValuePair<number, boolean> = { key: 1234, value: true };

export {};
