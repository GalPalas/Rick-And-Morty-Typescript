import Navbar from "components/Navbar";
import useFetchCharacters from "hooks/useFetchCharacters";

const App = () => {
  const characters = useFetchCharacters();
  console.log(characters);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
