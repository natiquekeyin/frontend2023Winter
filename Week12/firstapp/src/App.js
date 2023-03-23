import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
// Observer it starts with a capital letter...
function App() {
  return (
    <div className="container">
      <Header title="ABC" message="This is the best company" />
      <Tasks />
    </div>
  );
}

export default App;
