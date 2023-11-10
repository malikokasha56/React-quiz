function Progress({ index, numQuestions, totalPoints, points, answer }) {
  return (
    <header className="progress">
      <progress max={15} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
