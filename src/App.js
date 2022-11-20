
import './App.css';

import Landingpage from './pages/landingpage';
import 'flowbite';
import 'tw-elements';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutLanding from './component/LayoutLanding';
import AboutUs from './pages/AboutUs';
import Catalog from './pages/Catalog';
function App() {
  return (
  // <>
  //   <Navbar/>
  //   <Landingpage/>
  //   <Footer/>
  // </>
  <BrowserRouter>
    <Routes>
      <Route
            path="/"
            element={
              <>
                <LayoutLanding>
                <Landingpage/>
                </LayoutLanding>
           </>
            }
          />
            <Route
            path="/aboutus"
            element={
              <>
                <LayoutLanding>
                <AboutUs/>
                </LayoutLanding>
              </>
            }
          />
            <Route
            path="/catalog"
            element={
              <>
                <LayoutLanding>
                <Catalog/>
                </LayoutLanding>
              </>
            }
          />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
