import logo from './logo.svg';
import './App.scss';
import Counter from './counter/Counter.jsx'
import Todo from './todo/Todo.jsx'
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
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
            <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
