const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let positiveCount = 0;
let negativeCount = 0;
let minElement = array[0];
let minIndex = 0;
let maxElement = array[0];
let maxIndex = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productOfPositive = 1;

let i = 0;
while (i < array.length) {
  const element = array[i];
  
  if (element > 0) {
    sum += element;
    positiveCount++;
  }

  if (element < 0) {
    negativeCount++;
  }

  if (element < minElement) {
    minElement = element;
    minIndex = i;
  }

  if (element > maxElement) {
    maxElement = element;
    maxIndex = i;
  }

  if (element > 0) {
    if (element % 2 !== 0) {
      oddPositiveCount++;
    } else {
      evenPositiveCount++;
      sumEvenPositive += element;
    }
  }

  if (element > 0 && element % 2 !== 0) {
    sumOddPositive += element;
  }

  if (element > 0) {
    productOfPositive *= element;
  }

  if (element === maxElement) {
    for (let j = i + 1; j < array.length; j++) {
      array[j] = 0;
    }
  }

  i++;
}

console.log("Сума позитивних елементів:", sum);
console.log("Кількість позитивних елементів:", positiveCount);
console.log("Мінімальний елемент:", minElement);
console.log("Порядковий номер мінімального елемента:", minIndex);
console.log("Максимальний елемент:", maxElement);
console.log("Порядковий номер максимального елемента:", maxIndex);
console.log("Кількість негативних елементів:", negativeCount);
console.log("Кількість непарних позитивних елементів:", oddPositiveCount);
console.log("Кількість парних позитивних елементів:", evenPositiveCount);
console.log("Сума парних позитивних елементів:", sumEvenPositive);
console.log("Сума непарних позитивних елементів:", sumOddPositive);
console.log("Добуток позитивних елементів:", productOfPositive);
console.log("Масив після обнулення:", array);
