import PokemonContainer from "./PokemonContainer";
import "../styles/EndScreen.css";
import PropTypes from "prop-types";

export default function EndScreen({ history, hScore, progressGame }) {
  return (
    <div className="flex" id="main">
      <h1 id="end-score">Score: {history.length - 1}</h1>
      <h1 id="hscore">High Score: {hScore}</h1>
      <button onClick={progressGame}>Back to Start</button>
      <h2 id="container-title">Picked Pokémon:</h2>
      <PokemonContainer pokemon={history} />
    </div>
  );
}

EndScreen.propTypes = {
  history: PropTypes.arrayOf(PropTypes.number),
  hScore: PropTypes.number,
  progressGame: PropTypes.func
}