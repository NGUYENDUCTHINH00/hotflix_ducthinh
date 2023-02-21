import "./App.css";
import Body from "./components/body/Body";
import Navbar from "./components/header/Navbar.jsx";
function App() {
  return (
    <>
      <div className='body'>
        <Navbar />;
        <Body />
      </div>
    </>
  );
}

export default App;
