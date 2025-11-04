import styles from'./Post.module.css';
import { useParams } from "react-router-dom";

export default function Post({ src }) {
  const { id } = useParams();

  const date = new Date(src[id - 1].createdAt); // String → Dataに型変換
  const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  
  return (
    <div className={styles.post}>
      <img className={styles.thumbnail} src={src[id -1].thumbnailUrl} alt="image" />
      <div className={styles.postContainer}>
        <div className={styles.postInfo}>
          <div className={styles.postCreatedAt}>{formattedDate}</div>
          <div>
            {src[id - 1].categories.map((category) => (
              <span className={styles.postCategory}>{category}</span>
            ))}
          </div>
        </div>              
        <p className={styles.postTitle}>{src[id - 1].title}</p>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: src[id - 1].content }} />
      </div>

    </div>
  );
}