// 唯一
let fst: (a: number, b: string) => number = (a, b) => a;
fst(1, "1");
// 精确
let fst2: <T, U>(a: T, b: U) => T = (a, b) => a;
fst2("str", 1);
fst2(1, "str");

declare function pad(s: "left" | "right"): string;
pad("left");

let left = "left";
pad(left);

let right: "right";
pad(right);
