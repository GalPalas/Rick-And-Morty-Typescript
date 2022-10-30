import { Routes, Route } from "react-router-dom";
import Character from "components/Character";
import Characters from "components/Characters";
import Navbar from "components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/character/:id" element={<Character />}></Route>
        <Route path="/" element={<Characters />}></Route>
      </Routes>
    </>
  );
};

export default App;
