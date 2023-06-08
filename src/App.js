import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
