import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Add from "./pages/BookManagement/AddBook";
import Update from "./pages/BookManagement/UpdateBook";
import List from "./pages/BookManagement/BookList";
function App() {
  return (
    <div className="App">
      <Layout>
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Home" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="Add" element={<Add />} />
      <Route path="Update/:id" element={<Update />} />
      <Route path="List" element={<List />} />
      </Routes>
    </BrowserRouter>
    </Layout>
    </div>
  );
}

export default App;
