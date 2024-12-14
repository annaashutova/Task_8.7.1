let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (Number.isNaN(minValue)) {
    minValue = 0;
}

if (Number.isNaN(maxValue)) {
    maxValue = 100;
}
if (minValue < 0 || minValue > 1000){
    minValue = 0
}
if (maxValue > 1000 || maxValue < 0){
      maxValue = 999
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true; 

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function NumberToString(number) {
    let digit = {
      0: "ноль",
      1: "один",
      2: "два",
      3: "три",
      4: "четыре",
      5: "пять",
      6: "шесть",
      7: "семь",
      8: "восемь",
      9: "девять",
      10: "десять",
      11: "одиннадцать",
      12: "двенадцать",
      13: "тринадцать",
      14: "четырнадцать",
      15: "пятнадцать",
      16: "шестнадцать",
      17: "семнадцать",
      18: "восемнадцать",
      19: "девятнадцать",
      20: "двадцать",
      30: "тридцать",
      40: "сорок",
      50: "пятьдесят",
      60: "шестьдесят",
      70: "семьдесят",
      80: "восемьдесят",
      90: "девяносто",
      100: "сто",
      200: "двести",
      300: "триста",
      400: "четыреста",
      500: "пятьсот",
      600: "шестьсот",
      700: "семьсот",
      800: "восемьсот",
      900: "девятьсот",
    }
  
    let result = "";
  
    if(!digit[number]) {
      if (Math.abs(number / 100) < 1) {
        result = digit[number - number % 10] + " " + digit[number % 10];
      }
      else if (Math.abs(number / 100) > 1 && Math.abs(number / 100) < 10 ) {
        return digit[number - number % 100] +  " " + NumberToString(number % 100);
      }
    }
    else {
      result = digit[number]
    }
  
    return result;
  }

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${NumberToString(answerNumber) }?`; 

document.getElementById('btnRetry').addEventListener('click', function () {
    if (gameRun == false){ 
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));;
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        if (Number.isNaN(minValue)) {
            minValue = 0;
        }
        
        if (Number.isNaN(maxValue)) {
            maxValue = 100;
        }
        if (minValue < 0 || minValue > 1000){
            minValue = 0
        }
        if (maxValue > 1000 || maxValue < 0){
              maxValue = 999
        }
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${NumberToString(answerNumber) }?`;
        gameRun = true;
    }else{
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));;
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        if (Number.isNaN(minValue)) {
            minValue = 0;
        }
        
        if (Number.isNaN(maxValue)) {
            maxValue = 100;
        }
        
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${NumberToString(answerNumber) }?`;
        gameRun = true;
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 1);
            const answerPhrase = (phraseRandom === 1) ?
                `Ошибочка вышла\n\u{1F62C}` :
                `Числа закончились.. \n\u{1F64E}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom3 = Math.round( Math.random() * 3);
            switch(phraseRandom3) {
                case 1:
                   answerField.innerText = `Ваше число ${NumberToString(answerNumber) }?`;
                    break;
                case 2:
                   answerField.innerText = `Если это не ${NumberToString(answerNumber) }, идем дальше!\n\u{1F600}`;
                    break;
                case 3:
                    answerField.innerText = `${NumberToString(answerNumber) } ?`;
                    break;
            }
           
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom1 = Math.round( Math.random() * 3);
            switch(phraseRandom1) {
                 case 1:
                     answerField.innerText = `Увы, но чисел больше нет.. \n\u{1F645}`;
                     break;
                 case 2:
                     answerField.innerText = `Вы где то ошиблись \n\u{1F62C}`;
                     break;
                 case 3:
                     answerField.innerText = `Ошибочка вышла!`;
                     break;
             }
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;            
            const phraseRandom3 = Math.round( Math.random() * 3);
            switch(phraseRandom3) {
                 case 1:
                    answerField.innerText = `Ваше число ${NumberToString(answerNumber) }?`;
                     break;
                 case 2:
                    answerField.innerText = `Если это не ${NumberToString(answerNumber) }, идем дальше!\n\u{1F600}`;
                     break;
                 case 3:
                     answerField.innerText = `${NumberToString(answerNumber) } ?`;
                     break;
             }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom2 = Math.round( Math.random() * 4);        
         switch(phraseRandom2) {
            case 1:
                answerField.innerText = `Давай попробуем еще раз \n\u{1F64B}`;
            break;
            case 2:
                answerField.innerText = `Дай пять\n\u{1F64C}`;
            break;
            case 3:
                answerField.innerText = `Ура! 🎉`;
            break;
            case 4:
                answerField.innerText = `Это было легко!`;
            break;
            }
        gameRun = false;
    }
})
