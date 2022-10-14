import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
