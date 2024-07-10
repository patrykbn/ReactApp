import Home from './components/Home/Home';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    </main>
  );
  };

  export default App;