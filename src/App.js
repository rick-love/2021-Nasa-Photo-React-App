// Styles
import { GlobalStyle } from "./GlobalStyle";

// Components
import Navbar from "./components/layout/Navbar";
import Photos from "./components/photos/Photos";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Photos />

      </div>

    <div>https://github.com/nasa/apod-api</div>
    <GlobalStyle />
    </div>
  );
}

export default App;
