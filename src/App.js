import './App.scss';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import Loader from './components/Loader/Loader';
import Navbar from "./components/Navbar/Navbar";
import Sections from './components/Sections/Sections';
import UseContextProvider from './context/Context';

function App() {
  return (
    <>
      <Loader />
      <UseContextProvider>
        <LanguageSelector />
        <Navbar />
        <Sections />
      </UseContextProvider>
    </>
  );
}

export default App;