import React,{useState} from 'react';

const options = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  
    const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerRandomIndex = Math.floor(Math.random() * options.length);
    const computerRandomChoice = options[computerRandomIndex];
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult('It\'s a tie!');
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Scissors' && computer === 'Paper') ||
      (player === 'Paper' && computer === 'Rock')
    ) {
      setResult(`You win! ${player} beats ${computer}.`);
    } else {
      setResult(`Computer wins! ${computer} beats ${player}.`);
    }
  };

  const handleReset = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <div className="flex items-center justify-center w-3/4 mx-auto mb-12">
      <div className="p-8 rounded-md shadow-md text-center bg-slate-800 mt-12">
        <h1 className="text-3xl font-bold mb-4 text-white">Rock, Paper, Scissors Game</h1>
        <p className="text-2xl mb-4 text-white">Choose your move:</p>

        <div className="flex flex-wrap justify-center gap-4">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handlePlayerChoice(option)}
              className="bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-700 text-white text-2xl"
            >
              {option}
            </button>
          ))}
          <button
            onClick={handleReset}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700text-2xl"
          >
            Reset
          </button>
        </div>

        {playerChoice && computerChoice && (
          <div className="mt-8">
            <p className="text-white text-2xl">Your choice: {playerChoice}</p>
            <p className="text-white text-2xl">Computer's choice: {computerChoice}</p>
            <p className="text-white text-2xl">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RockPaperScissors;
