let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    if (gameRun == false){
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));;
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true;
    }else{
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));;
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true;
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Ошибочка вышла\n\u{1F62C}` :
                `Числа закончились.. \n\u{1F64E}`;
                `${answerNumber } ?`;
            

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom3 = Math.round( Math.random() * 3);
            const answerPhrase3 = (phraseRandom3 === 1 ) ?
             `Дай угадаю, это ${answerNumber }?`:
             `Ну а ${answerNumber } ваше число?` ;
              `${answerNumber } ?`;
            answerField.innerText = answerPhrase3;
           
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom1 = Math.round( Math.random() * 3);
            const answerPhrase1 = (phraseRandom1 === 1 ) ?
             `Увы, но чисел больше нет.. \n\u{1F645}`:
             `Вы где то ошиблись \n\u{1F62C}`;
             `Оштибочка вышла!`;
            answerField.innerText = answerPhrase1;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;            
            const phraseRandom3 = Math.round( Math.random() * 3);
            const answerPhrase3 = (phraseRandom3 === 1 ) ?
             `Ваше число ${answerNumber }?`:
             `Если это не ${answerNumber }, идем дальше!\n\u{1F600}`;
             `${answerNumber } ?`;
            answerField.innerText = answerPhrase3;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom2 = Math.round( Math.random() * 3);
        const answerPhrase2 = (phraseRandom2 === 1 ) ?
        `Давай попробуем еще раз \n\u{1F64B}`:
        `Ура! 🎉`;
        `Дай пять\n\u{1F64C}`;
        answerField.innerText = answerPhrase2;
        gameRun = false;
    }
})

