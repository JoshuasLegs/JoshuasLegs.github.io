import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './components/home/home';
import { Press } from './components/press/press';
import { useOnLoad } from './hooks/onload';



function App() {

  useOnLoad(() => {
    const body = document.querySelector("body");
    if (body) {
      body.scrollTo(0, document.body.scrollHeight);
      //setTimeout(() => setLoading(false), 300);
    }
  })

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </main>
  );
}

export default App;
