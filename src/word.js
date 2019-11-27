const items = ["pyhton", "html", "css", "java","javascript"];

const newGuessWord = () => items[Math.floor(Math.random() * items.length)];
// const items = ["banana", "apple", "orange", "papaya"];
// const images = [image0, image1, image2, image3, image4, image5, image6];

// const newGuessWord = () => items[Math.floor(Math.random() * items.length)];
// var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

// class GameImage extends Component{
//     constructor(props) {
//         super(props)
//         this.state = getInitialState();
//         // isButtonDisabled: false,
//         // word:randomItem(),
//         // guessed:''



//       }
//       handleClick(alphabate) {
//         this.setState({
//           isButtonDisabled: true
//         });
//         console.log(alphabate)
//       } 


//      render(){
//         // var keywords="abcdefghijklmnopqrstuvwxyz";
//         // var keys = keywords.split("");  
//      return(
//     <div>
//     <img src={pic0} className="main-image"/> 
//     <p className="text">Guess the Programming Language ?</p>
//     <p class="Hangman-word text-center">
//     _
//     _
//     _
//     </p>
//     <div className="arrange_button">

//     {keys.map(alphabate=><button className="arrange_alphabate " onClick={() => {this.handleClick(alphabate)}} 
//     disabled={this.state.isButtonDisabled}>{alphabate}</button>)};
//      <br/>

//     <p className="text-center">
//     <button className="button arrange_alphabate">reset</button> </p>
//      </div>


//     </div>
//      )

//      }
//     }  



// export default GameImage;