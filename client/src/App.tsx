import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
    </>
  );
}
export default App;
