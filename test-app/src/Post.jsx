import styles from'./Post.module.css';
import { useParams } from "react-router-dom";

export default function Post({ src }) {

  // /post/:id のidパラメータを取得
  const { id } = useParams();
  // 該当記事の取り出し
  const post = src.find((p) => p.id === Number(id));
  // 該当のidの記事がない場合
  if(!post){
    return <div>記事が見つかりません</div>;
  }

  // ISO 8601形式 → YYYY/MM/DD形式に変換
  const date = new Date(post.createdAt); // String → Dataに型変換
  const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  
  // 取得した該当記事をreturn
  return (
    <div className={styles.post}>
      <img className={styles.thumbnail} src={post.thumbnailUrl} alt="image" />
      <div className={styles.postContainer}>
        <div className={styles.postInfo}>
          <div className={styles.postCreatedAt}>{formattedDate}</div>
          <div>
            {post.categories.map((category) => (
              <span className={styles.postCategory}>{category}</span>
            ))}
          </div>
        </div>              
        <p className={styles.postTitle}>{post.title}</p>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

    </div>
  );
}