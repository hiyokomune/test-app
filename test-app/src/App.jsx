import './App.module.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header.jsx'
import posts from "./data/posts.js"
import ForList from "./ForList";
import Post from "./Post";
// import Contact from "./Contact";
import { useState, useEffect } from 'react';

export default function App() {

  const [posts, setPosts] = useState([])
  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
    }
    fetcher()
  }, [])

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
