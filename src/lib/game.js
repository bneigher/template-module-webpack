'use strict';

// import Letter from './letter.js';
// import Phrase from './phrase.js';

const Game = class Game {

  constructor(title) {
    console.log('here bem');

    this._title = title;
  }
  get originalTitle() {
    return this._title;
  }

  get domLetters() {
    const initial = this.originalTitle;
    return initial.split('').map((char) => {
      console.log(char);
      return char;
    });

  }

}

export default Game;