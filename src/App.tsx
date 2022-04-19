import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './components/home/home';
import { LoadingScreen } from './components/loading-screen/loading-screen';
import { Press } from './components/press/press';
import { useOnLoad } from './hooks/onload';



function App() {

  const [loading, setLoading] = useState(true);

  useOnLoad(() => {
    const body = document.querySelector("body");
    if (body) {
      body.scrollTo(0, document.body.scrollHeight);
      setTimeout(() => setLoading(false), 300);
    }
  })

  return (
    <main>
      {loading && <LoadingScreen></LoadingScreen>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </main>
  );
}

export default App;
