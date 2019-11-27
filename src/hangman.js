import React, { Component } from "react";
import "./index.css";
import image0 from "./images/00.png";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
const items = ["python", "html", "css", "java","javascript"];
const images = [image0, image1, image2, image3, image4, image5, image6];

let newGuessWord = () => items[Math.floor(Math.random() * items.length)];
var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

class HangmanImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lifes: images.length - 1,
			secretWord: newGuessWord(),
			alreadySelectedAlphabets: "",
			filterWord: newGuessWord(),
		} 
	};
handleAplhabetClick = alphabet => {
	this.setState(prevState => ({
		alreadySelectedAlphabets: prevState.alreadySelectedAlphabets + alphabet,
		lifes: this.state.secretWord.includes(alphabet) ? prevState.lifes : prevState.lifes - 1,
		
	}));

}

handleReset = () => {
	this.setState({
		lifes: images.length - 1,
		secretWord: newGuessWord(),
		alreadySelectedAlphabets: "",
		filterWord: newGuessWord(),
		selected_LeterLength:newGuessWord().length,
	});
};

render(){
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
					src={images[images.length - this.state.lifes - 1]}
					className="image_cenrer"
					alt="image0"
				/>
				<p className="text">Guess the Programming Language ?</p>
				{secretWordLetterList.map(alphabet =>
            this.state.alreadySelectedAlphabets.includes(alphabet) ||
						this.state.lifes <= 0 ? (
                <span> {alphabet} </span>
              ) : (
                <span> _ </span>
              )
                
              
          )}
				
			</div>

			<div class="arrange_button">
				{this.state.lifes === 0 ? <p>You Lost</p> : null}
				{this.state.selected_LeterLength === 0 ? <p>You Won</p> : null}
				{this.state.lifes === 0 || this.state.selected_LeterLength === 0
						? null
				:alphabets.map(alphabet => (
								<button
									onClick={() => this.handleAplhabetClick(alphabet)}
									className="arrange_alphabate"
									disabled={this.state.alreadySelectedAlphabets.includes(alphabet)}>
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
}

export default HangmanImage;

