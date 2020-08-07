function funct4(variable4: boolean): void {
  if (!variable4) {
    console.log("ACTION A");
  } else {
    console.log("ACTION B");
  }
}

funct4(true);
funct4(false);
console.log("-------");

// Code iterate to be optional
function funct4_1(variable4?: boolean): void {
  if (!variable4) {
    console.log("ACTION A");
  } else {
    console.log("ACTION B");
  }
}

funct4_1(true);
funct4_1(false);
funct4_1(undefined); // That is not true!
console.log("-------");
// Code iterate to be a number or null
function funct4_2(variable4: number | null): void {
  if (!variable4) {
    console.log("ACTION A");
  } else {
    console.log("ACTION B");
  }
}

funct4_2(1);
funct4_2(0);
funct4_2(null); // That is not true!
console.log("-------");
// Code fox
function funct4_3(variable4?: number): void {
  if (variable4 === undefined) {
    console.log("ACTION Default");
  } else if (variable4 === 0) {
    console.log("ACTION A");
  } else {
    console.log("ACTION B");
  }
}

funct4_3(1); // Action B because we have a number
funct4_3(0); // Action B because we have a number
funct4_3(); // Default value is action A
console.log("-------");
