import './App.module.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header.jsx'
import posts from "./data/posts.js"
import ForList from "./ForList";
import Post from "./Post";
// import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ForList src={posts} />} />
        <Route path="/post/:id" element={<Post src={posts} />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}