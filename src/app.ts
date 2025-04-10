
// const add = (n1: number, n2: number) => n1 + n2;

// // const a = add(5,6);
// // console.log(a);

// const printOutput = (output: number | string) => console.log(output);

// printOutput(add(8,9));

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    })
};

const addNumbers = add(5, 6, 7, 12);
console.log('Number: ' + addNumbers);