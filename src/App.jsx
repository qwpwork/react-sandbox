import logo from './logo.svg';
import './App.scss';
import Counter from './counter/Counter.jsx'
import Todo from './todo/Todo.jsx'
import Weather from './weather/Weather.jsx'
import { getDefaultNormalizer } from '@testing-library/react';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <Link className='item' to="/counter">Counter</Link>
          <Link className='item' to="/todo">Todo</Link>
          <Link className='item' to="/weather">Weather</Link>
        </nav>

        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
