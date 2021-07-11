// Styles
import { GlobalStyle } from "./GlobalStyle";
// Components
import Navbar from "./components/layout/Navbar";
import PhotoItem from "./components/photos/PhotoItem";


function App() {
  return (
    <div className="App">
      <Navbar />
      <PhotoItem />

    <GlobalStyle />
    </div>
  );
}

export default App;
