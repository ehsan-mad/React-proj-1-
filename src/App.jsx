import {
  
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const appName ="React App";
  return (
    <>
      <BrowserRouter>
       
          <Routes>
            <Route path="/" element={<MasterLayout title={appName}/>}>
              <Route index element={<Home/>}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="contact" element={<Contact/>}></Route>
            </Route>
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
