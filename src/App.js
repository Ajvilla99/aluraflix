import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import MediaUpload from './pages/MediaUpload';
import Page404 from './pages/Page404';
import Header from './components/Header'
import NewCategory from './pages/NewCategory';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload' element={<MediaUpload />}/>
          <Route path='/newCategory' element={<NewCategory />}/>
          <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
