class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.value = Math.round((this.min + this.max)/2)
    return this.value;
  }

  lower() {
    return this.max = this.value; //if num > value
  }

  greater() {
    return this.min = this.value; //if num < value
  }
}


  // // 409
  // game.setRange(0, 4048)
  // let result = game.guess();
  // game.lower();
  // result = game.guess();
  // game.lower();
  // result = game.guess();
  // game.lower();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.lower();
  // result = game.guess();
  // game.lower();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.lower();
  // result = game.guess();

  // // 782
  // const game = new GuessingGame();
  // game.setRange(0, 3198)
  // let result = game.guess();
  // game.lower();
  // result = game.guess();
  // game.lower();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.greater();
  // result = game.guess();
  // game.lower();
  // result = game.guess();
  // console.log(game.guess())

module.exports = GuessingGame;
