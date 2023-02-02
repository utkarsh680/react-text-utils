import About from "./Component/About";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar heading="textUtils" home="Home" about="About" />
      <Routes>
        <Route path="/" element={<Main heading="Enter Your text Below!"/>} />      
        <Route path="/about" element={ <About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
