import { Outlet } from 'react-router-dom';
import { Header } from './common/Header';
import { Footer } from './common/Footer';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
