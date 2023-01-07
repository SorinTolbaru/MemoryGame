import Game from "./Game";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./Menu";
import Loading from "./Loading";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/MemoryGame" element={<Menu/>}/>
      <Route path="/MemoryGame/Loading" element={<Loading/>}/>
      <Route path="/MemoryGame/Game" element={<Game/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
