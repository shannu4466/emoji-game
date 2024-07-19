import './index.css'

const NavBar = props => {
  const {currentScore, gameprogess, topScore} = props

  return (
    <nav>
      <div className="logo-name">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {gameprogess && (
        <div className="score-details">
          <p className="score">Score: {currentScore}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
