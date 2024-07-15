import { useState } from 'react'
import './App.css'
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Career />
      <Portfolio />
      <ContactMe />
    </>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Swechchha is the most ugliest person in the world</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
