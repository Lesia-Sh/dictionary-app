import logo from "./logo.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <button className="btn btn-primary">Hello</button>
      </header>
    </div>
  );
}
