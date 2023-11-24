import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import FilmCardPage from './pages/FilmCardPage';
import './App.css';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path='/favorites' exact element={<FavoritesPage/>}></Route>
            <Route path='/films/:id' exact element={<FilmCardPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
