'use strict';

const isNumber = function (value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

const getNum  = () => {
  const start = 1;
  const end = 100;
  let tryCount = 10;
  let n = Math.floor(Math.random() * (end - start + 1)) + start;
  const testNum = () => {
    let ask = +prompt(`Угадай число от ${start} до ${end} У тебя осталось ${tryCount} попыток`);
    tryCount--;
    if (tryCount<=0) {
      let gameover = confirm("Попытки закончились, хотите сыграть еще?");
      if (gameover) {
        getNum();
      }
    } else if (!isNumber(ask)) {
      alert('Введите число!');
      tryCount++;
      testNum();
    } else if (ask === null) {
      alert('Игра окончена!');
    } else if (+ask > n) {
      alert(`Загаданное число меньше ${ask}. У вас осталось ${tryCount} попыток`);
      testNum();
    } else if (+ask < n) {
      alert(`Загаданное число больше ${ask}. У вас осталось ${tryCount} попыток`);
      testNum();
    } else if (+ask === n) {
      let ifWin = confirm('Поздравляем, Вы угадали!!! Хотели бы сыграть еще?');
      if (ifWin) {
        getNum();
      } else {
        alert('Спасибо за игру!!!');
        getNum();
      }
    }
  };
  testNum();
};
getNum();