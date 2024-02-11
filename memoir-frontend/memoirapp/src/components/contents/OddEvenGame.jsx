// // import React,{useState,useEffect} from 'react'

// // const OddEvenGame = () => {
// //     const [user1Score, setUser1Score] = useState(0);
// //     const [user2Score, setUser2Score] = useState(0);
// //     const [currentNumber, setCurrentNumber] = useState(1);
// //     const [activeUser, setActiveUser] = useState(1);
// //     const [gameStarted, setGameStarted] = useState(false);
  
// //     useEffect(() => {
// //       let interval;
  
// //       if (gameStarted) {
// //         interval = setInterval(() => {
// //           setCurrentNumber((prevNumber) => prevNumber + 1);
// //           switchActiveUser();
// //         }, 1000);
// //       }
  
// //       return () => {
// //         clearInterval(interval);
// //       };
// //     }, [currentNumber, gameStarted]);
  
// //     const switchActiveUser = () => {
// //       setActiveUser((prevUser) => (prevUser === 1 ? 2 : 1));
// //     };
  
// //     const stopAtEven = () => {
// //       if (activeUser === 1 && currentNumber % 2 === 0) {
// //         setUser1Score((prevScore) => prevScore + 1);
// //         switchActiveUser();
// //       }
// //     };
  
// //     const stopAtOdd = () => {
// //       if (activeUser === 2 && currentNumber % 2 !== 0) {
// //         setUser2Score((prevScore) => prevScore + 1);
// //         switchActiveUser();
// //       }
// //     };
  
// //     const startGame = () => {
// //       setGameStarted(true);
// //       setTimeout(() => {
// //         setGameStarted(false);
// //         determineWinner();
// //       }, 30000);
// //     };
  
// //     const determineWinner = () => {
// //       if (user1Score > user2Score) {
// //         alert('User 1 wins!');
// //       } else if (user1Score < user2Score) {
// //         alert('User 2 wins!');
// //       } else {
// //         alert('It\'s a tie!');
// //       }
  
// //       resetGame();
// //     };
  
// //     const resetGame = () => {
// //       setUser1Score(0);
// //       setUser2Score(0);
// //       setCurrentNumber(1);
// //       setActiveUser(1);
// //       setGameStarted(false);
// //     };
  
// //     return (
// //       <div className="App text-center bg-gray-100 p-8 rounded-md shadow-md">
// //         <h1 className="text-3xl font-bold mb-4 text-blue-600">Even-Odd Game</h1>
  
// //         <div className="mb-4">
// //           <p className="text-lg">User 1 Score: {user1Score}</p>
// //           <p className="text-lg">User 2 Score: {user2Score}</p>
// //         </div>
  
// //         <div className="mb-4">
// //           <p className="text-lg">Current Number: {currentNumber}</p>
// //           <p className="text-lg">Active User: {activeUser}</p>
// //         </div>
  
// //         <div className="mb-4">
// //           <button
// //             className="bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-600"
// //             onClick={stopAtEven}
// //           >
// //             Stop at Even
// //           </button>
// //           <button
// //             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
// //             onClick={stopAtOdd}
// //           >
// //             Stop at Odd
// //           </button>
// //         </div>
  
// //         <button
// //           className={`bg-yellow-500 text-white py-2 px-4 rounded-md ${gameStarted && 'opacity-50 cursor-not-allowed'}`}
// //           onClick={startGame}
// //           disabled={gameStarted}
// //         >
// //           Start Game
// //         </button>
// //       </div>
// //     );
// // }

// // export default OddEvenGame;

// // import React, { useState, useEffect } from 'react';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const OddEvenGame = () => {
// //   const [user1Score, setUser1Score] = useState(0);
// //   const [user2Score, setUser2Score] = useState(0);
// //   const [currentNumber, setCurrentNumber] = useState(1);
// //   const [activeUser, setActiveUser] = useState(1);
// //   const [gameStarted, setGameStarted] = useState(false);

// //   useEffect(() => {
// //     let interval;

// //     if (gameStarted) {
// //       interval = setInterval(() => {
// //         setCurrentNumber((prevNumber) => prevNumber + 1);
// //         switchActiveUser();
// //       }, 1000);
// //     }

// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [currentNumber, gameStarted]);

// //   const switchActiveUser = () => {
// //     setActiveUser((prevUser) => (prevUser === 1 ? 2 : 1));
// //   };

// //   const stopAtEven = () => {
// //     if (activeUser === 1 && currentNumber % 2 === 0) {
// //       setUser1Score((prevScore) => prevScore + 1);
// //       switchActiveUser();
// //     }
// //   };

// //   const stopAtOdd = () => {
// //     if (activeUser === 2 && currentNumber % 2 !== 0) {
// //       setUser2Score((prevScore) => prevScore + 1);
// //       switchActiveUser();
// //     }
// //   };

// //   const startGame = () => {
// //     setGameStarted(true);
// //     setTimeout(() => {
// //       setGameStarted(false);
// //       determineWinner();
// //     }, 30000);
// //   };

// //   const determineWinner = () => {
// //     if (user1Score > user2Score) {
// //       toast.success('User 1 wins!');
// //     } else if (user1Score < user2Score) {
// //       toast.success('User 2 wins!');
// //     } else {
// //       toast.info("It's a tie!");
// //     }

// //     resetGame();
// //   };

// //   const resetGame = () => {
// //     setUser1Score(0);
// //     setUser2Score(0);
// //     setCurrentNumber(1);
// //     setActiveUser(1);
// //     setGameStarted(false);
// //   };

// //   return (
// //     <div className="App text-center bg-gray-100 p-8 rounded-md shadow-md">
// //       <h1 className="text-3xl font-bold mb-4 text-blue-600">Even-Odd Game</h1>

// //       <div className="mb-4">
// //         <p className="text-lg">User 1 Score: {user1Score}</p>
// //         <p className="text-lg">User 2 Score: {user2Score}</p>
// //       </div>

// //       <div className="mb-4">
// //         <p className="text-lg">Current Number: {currentNumber}</p>
// //         <p className="text-lg">Active User: {activeUser}</p>
// //       </div>

// //       <div className="mb-4">
// //         <button
// //           className="bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-600"
// //           onClick={stopAtEven}
// //         >
// //           Stop at Even
// //         </button>
// //         <button
// //           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
// //           onClick={stopAtOdd}
// //         >
// //           Stop at Odd
// //         </button>
// //       </div>

// //       <button
// //         className={`bg-yellow-500 text-white py-2 px-4 rounded-md ${gameStarted && 'opacity-50 cursor-not-allowed'}`}
// //         onClick={startGame}
// //         disabled={gameStarted}
// //       >
// //         Start Game
// //       </button>

// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default OddEvenGame;

// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const OddEvenGame = () => {
//   const [user1Score, setUser1Score] = useState(0);
//   const [user2Score, setUser2Score] = useState(0);
//   const [currentNumber, setCurrentNumber] = useState(1);
//   const [activeUser, setActiveUser] = useState(1);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(30);

//   useEffect(() => {
//     let interval;

//     if (gameStarted) {
//       interval = setInterval(() => {
//         setCurrentNumber((prevNumber) => prevNumber + 1);
//         switchActiveUser();
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [gameStarted]);

//   useEffect(() => {
//     if (timeLeft === 0) {
//       setGameStarted(false);
//     }
//   }, [timeLeft]);

//   useEffect(() => {
//     if (!gameStarted) {
//       determineWinner();
//     }
//   }, [gameStarted]);

//   const switchActiveUser = () => {
//     setActiveUser((prevUser) => (prevUser === 1 ? 2 : 1));
//   };

//   const stopAtEven = () => {
//     if (activeUser === 1 && currentNumber % 2 === 0) {
//       setUser1Score((prevScore) => prevScore + 1);
//       switchActiveUser();
//     }
//   };

//   const stopAtOdd = () => {
//     if (activeUser === 2 && currentNumber % 2 !== 0) {
//       setUser2Score((prevScore) => prevScore + 1);
//       switchActiveUser();
//     }
//   };

//   const startGame = () => {
//     setGameStarted(true);
//     setTimeLeft(30);
//   };

//   const determineWinner = () => {
//     if (user1Score > user2Score) {
//       toast.success('User 1 wins!');
//     } else if (user1Score < user2Score) {
//       toast.success('User 2 wins!');
//     } else {
//       toast.info("It's a tie!");
//     }

//     resetGame();
//   };

//   const resetGame = () => {
//     setUser1Score(0);
//     setUser2Score(0);
//     setCurrentNumber(1);
//     setActiveUser(1);
//   };

//   return (
//     <div className="App text-center bg-gray-100 p-8 rounded-md shadow-md">
//       <h1 className="text-3xl font-bold mb-4 text-blue-600">Even-Odd Game</h1>

//       <div className="mb-4">
//         <p className="text-lg">User 1 Score: {user1Score}</p>
//         <p className="text-lg">User 2 Score: {user2Score}</p>
//       </div>

//       <div className="mb-4">
//         <p className="text-lg">Current Number: {currentNumber}</p>
//         <p className="text-lg">Active User: {activeUser}</p>
//         <p className="text-lg">Time Left: {timeLeft} seconds</p>
//       </div>

//       <div className="mb-4">
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-600"
//           onClick={stopAtEven}
//           disabled={!gameStarted}
//         >
//           Stop at Even
//         </button>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           onClick={stopAtOdd}
//           disabled={!gameStarted}
//         >
//           Stop at Odd
//         </button>
//       </div>

//       <button
//         className={`bg-yellow-500 text-white py-2 px-4 rounded-md ${gameStarted && 'opacity-50 cursor-not-allowed'}`}
//         onClick={startGame}
//         disabled={gameStarted}
//       >
//         Start Game
//       </button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default OddEvenGame;
