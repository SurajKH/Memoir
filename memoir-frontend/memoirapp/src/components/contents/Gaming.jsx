// export default GuessTheNumberGame;
import React, { useState, useEffect } from 'react';
import VoucherCard from './VoucherCard';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../common/Footer';
import RockPaperScissors from './RockPaperScissors';
// import OddEvenGame from './OddEvenGame';

// const companyLogos = {
//   'SuperMart': 'https://example.com/supermart-logo.png',
//   'TechHub': 'https://example.com/techhub-logo.png',
//   'FashionLane': 'https://example.com/fashionlane-logo.png',
//   'HomeGoods': 'https://example.com/homegoods-logo.png',
//   'BooksRUs': 'https://example.com/booksrus-logo.png',
// };


const GuessTheNumberGame = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [vouchers, setVouchers] = useState([]);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [revealedVoucherIndex, setRevealedVoucherIndex] = useState(null);

  useEffect(() => {
    setVouchers(generateVouchers());
  }, []);

  const generateExpiryDate = () => {
    const currentDate = new Date();
    const expiryDate = new Date(currentDate);
    expiryDate.setDate(currentDate.getDate() + 5); // Expiry date 5 days from the current date
    return expiryDate.toDateString();
  };

  const generateVouchers = () => {
    const voucherTypes = ['$10 off', '20% discount', 'Free shipping', 'Buy one get one free'];
    const generatedVouchers = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * voucherTypes.length);
      const voucherType = voucherTypes.splice(randomIndex, 1)[0];
      const voucherUUID = uuidv4();
      const expiryDate = generateExpiryDate();
      const storeName = generateStoreName();
      const couponCode = generateCouponCode();
      //const companyName = generateCompanyName();
      generatedVouchers.push({ voucherType, voucherUUID, expiryDate, storeName, couponCode });
    }
    return generatedVouchers;
  };

  const generateStoreName = () => {
    const storeNames = ['First Store', 'Second Store', 'Third Store', 'Fourth Store', 'Fifth Store'];
    const randomIndex = Math.floor(Math.random() * storeNames.length);
    return storeNames[randomIndex];
  };

  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const couponLength = 8; // You can adjust the length of the coupon code
    let couponCode = '';

    for (let i = 0; i < couponLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      couponCode += characters.charAt(randomIndex);
    }

    return couponCode;
  };

  // const generateCompanyName = () => {
  //   const companyNames = Object.keys(companyLogos);
  //   const randomIndex = Math.floor(Math.random() * companyNames.length);
  //   return companyNames[randomIndex];
  // };

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      setFeedback('Please enter a valid number between 1 and 100.');
    } else {
      if (guess === secretNumber) {
        setFeedback('Congratulations! You guessed the correct number.');
        setIsCorrectGuess(true);
        revealRandomVoucher();
      } else if (guess < secretNumber) {
        setFeedback('Too low! Try a higher number.');
      } else {
        setFeedback('Too high! Try a lower number.');
      }
    }
  };

  const revealRandomVoucher = () => {
    const randomIndex = Math.floor(Math.random() * vouchers.length);
    setRevealedVoucherIndex(randomIndex);
  };

  const flipVoucher = (index) => {
    if (index === revealedVoucherIndex) {
      // Implement the logic to show the voucher details or navigate to a new page
      console.log('Voucher revealed:', vouchers[index]);
    } else {
      console.log('You can only access the revealed voucher.');
    }
  };

  return (
    <>
    <div className='w-3/4 mx-auto bg-gray-800 mt-12 p-12 mb-12'>
      <p className='text-3xl text-white w-3/4 mx-auto'>Feel Like Playing a Game.</p>
    </div>
    <div className="flex flex-col min-h-screen border border-black">
      <div className="flex flex-col items-center mt-8 flex-grow">
        <h1 className="text-4xl font-bold mb-4">Guess the Number Game</h1>
        <p className="text-2xl mb-4">Can you guess the secret number between 1 and 100?</p>

        <div className="mb-4">
          <input
            type="number"
            className="border p-2 text-2xl"
            placeholder="Enter your guess"
            value={userGuess}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          onClick={handleGuess}
        >
          Guess
        </button>

        {feedback && <p className="mt-4 text-2xl">{feedback}</p>}

        {isCorrectGuess && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {vouchers.map((voucher, index) => (
              <div key={index} className="relative">
                <VoucherCard
                  voucher={revealedVoucherIndex === index ? voucher : 'X'}
                  onClick={() => flipVoucher(index)}
                  revealedDetails={revealedVoucherIndex === index}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <RockPaperScissors/>
      <Footer />
    </div>
    {/* <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Guess the Number Game</h1>
      <p className="mb-4">Can you guess the secret number between 1 and 100?</p>

      <div className="mb-4">
        <input
          type="number"
          className="border p-2"
          placeholder="Enter your guess"
          value={userGuess}
          onChange={handleInputChange}
        />
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        onClick={handleGuess}
      >
        Guess
      </button>

      {feedback && <p className="mt-4">{feedback}</p>}

      {isCorrectGuess && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {vouchers.map((voucher, index) => (
            <div key={index} className="relative">
              <VoucherCard
                voucher={revealedVoucherIndex === index ? voucher : 'X'}
                onClick={() => flipVoucher(index)}
                revealedDetails={revealedVoucherIndex === index}
              />
            </div>
          ))}
        </div>
      )}
    </div>
    {/* <OddEvenGame/> */}
    {/* <Footer/> */}
    </> 
  );
};

export default GuessTheNumberGame;
