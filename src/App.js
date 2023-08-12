
import './App.css';
import AddWorker from './components/worker';
import AddJob from './components/job';
import AddTools from './components/tools';
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
          <Route path="/worker" element={<AddWorker/>}/>
          <Route path="/job" element={<AddJob/>}/>
          <Route path="/tools" element={<AddTools/>}/>
        </Routes>
      </div>
    </Router>
    <TimeSheet/>
    </div>
  );
}

export default App;
