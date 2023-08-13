
import './App.css';
import AddWorker from './components/worker';
import AddJob from './components/job';
import AddEquipements from './components/equipements';
import Menu from './components/menu';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import TimeSheet from './components';

function App() {

  return (
    <div>
    <Router>
      <div className="App">
        <Menu/>
        <Routes>
          <Route path="/" element={<TimeSheet/>}/>
          <Route path="/worker" element={<AddWorker/>}/>
          <Route path="/job" element={<AddJob/>}/>
          <Route path="/equipements" element={<AddEquipements/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
