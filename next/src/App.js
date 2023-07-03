import './App.css';
import User from './User/user';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route   path="/" element={  <User/>}/>   
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;