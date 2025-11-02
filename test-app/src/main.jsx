import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import posts from './data/posts.js' // post.jsをインポート
import ForList from './ForList.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ForList src={posts} />
  </StrictMode>,
)
