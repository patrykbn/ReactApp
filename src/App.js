import Home from './components/Home/Home';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import List from './components/List/List'

const App = props => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/list/:listId' element={<List />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    </main>
  );
  };

  export default App;