import React, { useState } from 'react';
import './App.css';

const StudentPairing = ({ students }) => {
  const [pairs, setPairs] = useState([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(-1);
  const [showAllPairs, setShowAllPairs] = useState(false);

  const handlePairing = () => {
    const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
    const pairedStudents = [];

    for (let i = 0; i < shuffledStudents.length; i += 2) {
      if (i + 1 < shuffledStudents.length) {
        pairedStudents.push([shuffledStudents[i], shuffledStudents[i + 1]]);
      } else {
        pairedStudents.push([shuffledStudents[i]]);
      }
    }

    setPairs(pairedStudents);
    setCurrentPairIndex(0);
  };

  const handleNextPair = () => {
    if (currentPairIndex === pairs.length - 1) {
      setShowAllPairs(true);
    } else {
      setCurrentPairIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <button className="pair-button" onClick={handlePairing}>
        Pair Students
      </button>
      {currentPairIndex !== -1 && !showAllPairs && (
        <div className="pair-text">
          Pair {currentPairIndex + 1}: {pairs[currentPairIndex].join(' and ')}
        </div>
      )}
      {currentPairIndex !== -1 && !showAllPairs && (
        <button className="next-button" onClick={handleNextPair}>
          Next Pair
        </button>
      )}
      {showAllPairs && (
        <div>
          <h3>All Pairs:</h3>
          {pairs.map((pair, index) => (
            <div key={index} className="pair-text">
              Pair {index + 1}: {pair.join(' and ')}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const students = ['Grace', 'Halle', 'Rupert', "Hudson", 'Ari', 'Brylie', 'Sarah', 'Cooper', 'Jayden', 'Austin', 'Adelin'];

  return (
    <div className="container">
      <h1 className="title">Student Pairing</h1>
      <StudentPairing students={students} />
    </div>
  );
};

export default App;

// import React, { useState } from 'react';
// import './App.css';

// const StudentPairing = ({ students }) => {
//   const [pairs, setPairs] = useState([]);
//   const [currentPairIndex, setCurrentPairIndex] = useState(-1);

//   const handlePairing = () => {
//     const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
//     const pairedStudents = [];

//     for (let i = 0; i < shuffledStudents.length; i += 2) {
//       if (i + 1 < shuffledStudents.length) {
//         pairedStudents.push([shuffledStudents[i], shuffledStudents[i + 1]]);
//       } else {
//         pairedStudents.push([shuffledStudents[i]]);
//       }
//     }

//     setPairs(pairedStudents);
//     setCurrentPairIndex(0);
//   };

//   const handleNextPair = () => {
//     setCurrentPairIndex((prevIndex) => prevIndex + 1);
//   };

//   return (
//     <div>
//       <button className="pair-button" onClick={handlePairing}>
//         Pair Students
//       </button>
//       {currentPairIndex !== -1 && (
//         <div className="pair-text">
//           Pair {currentPairIndex + 1}: {pairs[currentPairIndex].join(' and ')}
//         </div>
//       )}
//       {currentPairIndex !== -1 && currentPairIndex < pairs.length - 1 && (
//         <button className="next-button" onClick={handleNextPair}>
//           Next Pair
//         </button>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const students = ['Grace', 'Halle', 'Rupert', "Hudson", 'Ari', 'Brylie', 'Sarah', 'Cooper', 'Jayden', 'Austin', 'Adelin'];

//   return (
//     <div className="container">
//       <h1 className="title">Student Pairing</h1>
//       <StudentPairing students={students} />
//     </div>
//   );
// };

// export default App;

// // import React, { useState } from 'react';
// // import './App.css';

// // const StudentPairing = ({ students }) => {
// //   const [pairs, setPairs] = useState([]);

// //   const handlePairing = () => {
// //     const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
// //     const pairedStudents = [];

// //     for (let i = 0; i < shuffledStudents.length; i += 2) {
// //       if (i + 1 < shuffledStudents.length) {
// //         pairedStudents.push([shuffledStudents[i], shuffledStudents[i + 1]]);
// //       } else {
// //         pairedStudents.push([shuffledStudents[i]]);
// //       }
// //     }

// //     setPairs(pairedStudents);
// //   };

// //   return (
// //     <div>
// //       <button className="pair-button" onClick={handlePairing}>
// //         Pair Students
// //       </button>
// //       {pairs.map((pair, index) => (
// //         <div key={index} className="pair-text">
// //           Pair {index + 1}: {pair.join(' and ')}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // const App = () => {
// //   const students = ['Grace', 'Halle', 'Rupert', "Hudson", 'Ari', 'Brylie', 'Sarah', 'Cooper', 'Jayden', 'Austin', 'Adelin'];

// //   return (
// //     <div className="container">
// //       <h1 className="title">Student Pairing</h1>
// //       <StudentPairing students={students} />
// //     </div>
// //   );
// // };

// // export default App;
