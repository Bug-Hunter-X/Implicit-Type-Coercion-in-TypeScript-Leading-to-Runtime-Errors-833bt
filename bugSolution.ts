function printNumber(num: number): void {
  console.log(num);
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function printNumberSafe(num: any): void {
  if (isNumber(num)) {
    printNumber(num);
  } else {
    console.error('Invalid input: Not a number');
  }
}

printNumber(10);
printNumberSafe(20);
printNumberSafe('10'); // This will now result in an error message