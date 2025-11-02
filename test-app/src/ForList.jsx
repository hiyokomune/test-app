import styles from'./ForList.module.css';

export default function ForList({ src }) {
  return (
    <ul className={styles.posts}>
      {src.map((elem) => {
        const date = new Date(elem.createdAt); // String → Dataに型変換
        const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        return (
          <li key={elem.id} className={styles.post}>
            <a href="">
              <div className={styles.postInfo}>
                <div className={styles.postCreatedAt}>{formattedDate}</div>
                <div>
                  {elem.categories.map((category) => (
                    <span className={styles.postCategory}>{category}</span>
                  ))}
                </div>
              </div>              

              <p className={styles.postTitle}>{elem.title}</p>
              <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: elem.content }} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
