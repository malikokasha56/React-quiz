function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage === 80 && percentage < 100) emoji = "☺";
  if (percentage === 50 && percentage < 80) emoji = "🤔ok";
  if (percentage === 0 && percentage < 50) emoji = "🤷‍♂️";
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> points out of {totalPoints}
        ({Math.ceil(percentage)}%).
      </p>
      <p className="highscore">(HighScore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button>
    </>
  );
}

export default FinishScreen;
