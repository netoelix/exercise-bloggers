import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { About, NotFound, Posts, Users } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Users /> } />
      <Route path="/posts/:id" element={ <Posts /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
