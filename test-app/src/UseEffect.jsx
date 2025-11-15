import { useEffect, useState } from "react";
const [posts, setPosts] = useState([])

  // APIでpostsを取得する処理をuseEffectで実行します。
export default useEffect(() => {
  const fetcher = async () => {
    const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
    const data = await res.json()
    setPosts(data.posts)
  }

    fetcher()
  }, [])