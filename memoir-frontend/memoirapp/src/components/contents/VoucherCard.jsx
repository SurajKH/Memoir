// // VoucherCard.js
// import React from 'react';

// const VoucherCard = ({ voucher, onClick, revealedDetails }) => {
//   return (
//     <div
//       className='bg-black p-4 rounded-md cursor-pointer border border-gray-400 transition-transform transform hover:scale-105' style={{width:"300px", height:"200px"}}
//        onClick={onClick}
//     >
//       {revealedDetails ? (
//         <div className='w-3/4 mx-auto' width={"500px"} height={"500px"}>
//           <p className="text-2xl font-bold text-yellow-500 mb-2">{voucher.voucherType}</p>
//           <p className="text-xl text-gray-200 mb-2">Store: {voucher.storeName}</p>
//           <p className="text-xl text-gray-200">Expiry Date: {voucher.expiryDate}</p>
//         </div>
//       ) : (
//         <p className="text-4xl font-bold text-yellow-500">{voucher}</p>
//       )}
//     </div>
//   );
// };

// export default VoucherCard;

// import React from 'react';

// const VoucherCard = ({ voucher, onClick, revealedDetails }) => {
//   return (
//     <div
//       className='bg-black p-4 rounded-md cursor-pointer border border-gray-400 transition-transform transform hover:scale-105'
//       style={{ width: "100%", maxWidth: "300px",minWidth:"200px", minHeight: "200px", boxSizing: "border-box" }}
//       onClick={onClick}
//     >
//       {revealedDetails ? (
//         <div className='mx-auto'>
//           <p className="text-2xl font-bold text-yellow-500 mb-2">{voucher.voucherType}</p>
//           <p className="text-xl text-gray-200 mb-2">Store: {voucher.storeName}</p>
//           <p className="text-xl text-gray-200">Expiry Date: {voucher.expiryDate}</p>
//         </div>
//       ) : (
//         <p className="text-4xl font-bold text-yellow-500 text-center">{voucher}</p>
//       )}
//     </div>
//   );
// };

// export default VoucherCard;

import React from 'react';

const companyLogos = {
  'First Company': 'https://example.com/supermart-logo.png',
  'Second Company': 'https://example.com/techhub-logo.png',
  'Third Company': 'https://example.com/fashionlane-logo.png',
  'Fourth Company': 'https://example.com/homegoods-logo.png',
  'Fifth Company': 'https://example.com/booksrus-logo.png',
};

const VoucherCard = ({ voucher, onClick, revealedDetails }) => {

  // const companyLogo = voucher.companyName ? companyLogos[voucher.companyName] : null;

  // const companyLogo = voucher.companyName ? companyLogos[voucher.companyName] : null;

  return (
    <div
      className='bg-black p-4 rounded-md cursor-pointer border border-gray-400 transition-transform transform hover:scale-105'
      style={{ width: "100%", maxWidth: "300px", minWidth: "200px", minHeight: "250px", boxSizing: "border-box" }}
      onClick={onClick}
    >
      {revealedDetails ? (
        <div className='mx-auto text-center'>
          <p className="text-2xl font-bold text-yellow-500 mb-2">{voucher.voucherType}</p>
          <p className="text-xl text-gray-200 mb-2">Store: {voucher.storeName}</p>
          <p className="text-xl text-gray-200">Expiry Date: {voucher.expiryDate}</p>
          <p className="text-lg text-gray-200 mb-2">Coupon Code: {voucher.couponCode}</p>
          {/* <p className="text-lg text-gray-200 mb-2">Company Name: {voucher.companyName}</p>
          {companyLogo && <img src={companyLogo} alt={`${voucher.companyName} Logo`} className="mx-auto my-2" style={{ maxWidth: "100px", maxHeight: "100px" }} />} */}
        </div>
      ) : (
        <p className="text-4xl font-bold text-yellow-500 text-center">{voucher}</p>
      )}
    </div>
  );
};

export default VoucherCard;
