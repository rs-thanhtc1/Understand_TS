let userName = 'Max';
type UserName = typeof userName;

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['Thanh', 'Quan']
};

// type settings = typeof settings;

function loadData1(s: typeof settings){
    //...
}

loadData1(settings);


// Ví dụ về cách sử dung khác của typeof
function sum(a: number, b: number) {
    return a + b;
  }
  function subtract(a: number, b: number) {
    return a - b;
  }
   
  type SumFn = typeof sum;
  type SubtractFn = typeof subtract;
   
  function performMathAction(cb: SumFn | SubtractFn) {
    // some code...
  }
