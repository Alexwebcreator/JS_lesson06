'use strict';

const start = 1, end = 100;

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const guesser = function(ans, num) {
  
  switch (true) {
  case ans === null:
    alert('Игра окончена');
    return { gameover: true };
  case isNaN(+ans):
    return { msg: 'Введи число!', gameover: false };
  case +ans > end || +ans < start:
    return {
      msg: `Число должно быть от ${start} до ${end}`,
      gameover: false,
    };
  case +ans > num:
    return {
      msg: `Загаданное число меньше ${ans}.`,
      gameover: false,
    };
  case +ans < num:
    return {
      msg: `Загаданное число больше ${ans}.`,
      gameover: false,
    };
  case +ans === num:
    return {
      msg: `Поздравляю, Вы угадали!!!`,
      gameover: true,
    };
  }
};

const game = secret => rules => {

  const answer = prompt(`Угадай число от ${start} до ${end}?`);
  const { msg, gameover } = rules(answer, secret);
  let repeat = false;

  if (gameover) {
    if (msg === 'Игра окончена') {
      repeat = false;
    } else {
      repeat = confirm(msg);
    }
  } else {
    alert(msg);
    repeat = game(secret)(rules);
  }

  return repeat;

};

const letsPlay = function() {
  document.title = `Угадай число`;
  const secret = getRandomInRange(start, end);
  const playAgain = game(secret)(guesser);
  if (playAgain) letsPlay();
};

letsPlay();
