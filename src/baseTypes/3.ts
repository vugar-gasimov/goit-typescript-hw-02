let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
  console.log(str.toUpperCase());
}
export {};
