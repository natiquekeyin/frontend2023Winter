import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Observer it starts with a capital letter...
function App() {
  return (
    <div className="App">
      <h1>First React App</h1>
      <Header title="ABC" message="This is the best company" />
    </div>
  );
}

export default App;
