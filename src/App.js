import './app.scss';
import Register from './pages/register/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Barchart from './pages/barchart/Barchart';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/barchart' element={<Barchart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
