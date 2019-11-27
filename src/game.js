import React, { Component } from 'react';
import './index.css';
import image0 from './images/00.png';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';


const items = ["python", "html", "css", "java","javascript"];
const images = [image0, image1, image2, image3, image4, image5, image6];

const newGuessWord = () => items[Math.floor(Math.random() * items.length)];
var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

class GameImage extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  handleAplhabetClick = alphabet => {
    if (this.shouldNotBeAbleToPlay()) {
      return;
    }
    this.setState(prevState => ({
      alreadySelectedAlphabets: prevState.alreadySelectedAlphabets + alphabet,
      lifes: decreaseLifeIfGuessIsWrong(
        prevState.secretWord,
        alphabet,
        prevState
      )
    }));
  };

  handleReset = () => {
    this.setState(getInitialState());
  };

  shouldNotBeAbleToPlay() {
    return this.state.lifes <= 0;
  }

  render() {
    const NO_KEYBOARD_TO_PLAY = null;
    const secretWordLetterList = this.state.secretWord.split("");
    return (
      <div>
        <p className='title-text' href='/'>
						Hangman. <small>Do (or) Die</small></p>
        <div class="guesses_left">
        Guessed wrong : {this.state.lifes}
        </div>
        <div className="center">
          <img
            src={images[this.nextImageToBeShown()]}
            className="image_cenrer"
            alt="image1"
          />
          <p className="text">Guess the Programming Language ?</p>
          {secretWordLetterList.map(alphabet =>
            this.isAlreadyBeenSelected(alphabet) ||
              this.shouldNotBeAbleToPlay() ? (
                <span> {alphabet} </span>
              ) : (
                <span> _ </span>
              )
                
              
          )}
        </div>
        <div id="arrange_button">
          {this.shouldNotBeAbleToPlay()
            ?NO_KEYBOARD_TO_PLAY
            : alphabets.map(alphabet => (
              <button
                onClick={() => this.handleAplhabetClick(alphabet)}
                className="arrange_alphabate"
                disabled={this.isAlreadyBeenSelected(alphabet)}
              >
                {alphabet}
              </button>
            ))}

          <br />
          <button onClick={this.handleReset} className="reset_game buttons">
            reset
          </button>
        </div>
      </div>
    );
  }

  isAlreadyBeenSelected(alphabet) {
    return this.state.alreadySelectedAlphabets.includes(alphabet);
  }

  nextImageToBeShown() {
    return images.length - 1 - this.state.lifes;
  }
}
export default GameImage;

function getInitialState() {
  return {
    lifes: images.length - 1,
    secretWord: newGuessWord(),
    alreadySelectedAlphabets: ""
  };
}

function decreaseLifeIfGuessIsWrong(secretWord, secretLetter, prevState) {
  return secretWord.includes(secretLetter)
    ? prevState.lifes
    : prevState.lifes - 1;
}
