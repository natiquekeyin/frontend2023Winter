import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import USComponent from "./components/USComponent";
import USComponentArray from "./components/USComponentArray";
// Observer it starts with a capital letter...
function App() {
  return (
    <div className="container">
      <USComponent />
    </div>
  );
}

export default App;
