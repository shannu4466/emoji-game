import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? wonImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLable = isWon ? 'Best Score' : 'Score'

  return (
    <div className="game-status-container">
      <div className="body2">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-lable">{scoreLable}</p>
        <p className="finalscore">{score}/12</p>
        <button
          onClick={onClickPlayAgain}
          type="button"
          className="play-again-btn"
        >
          Play Again
        </button>
      </div>
      <div className="img-container">
        <img src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
