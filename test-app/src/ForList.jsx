import './ForList.css';

export default function ForList({ src }) {
  return (
    <ul className='posts'>
      {src.map((elem) => {
        const date = new Date(elem.createdAt); // String → Dataに型変換
        const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        return (
          <li key={elem.id} className="post">
            <a href="">
              <div className='post-info'>
                <div className="post-createdAt">{formattedDate}</div>
                <div className="post-categories">
                  {elem.categories.map((category) => (
                    <span className="post-category">{category}</span>
                  ))}
                </div>
              </div>              

              <p className="post-title">{elem.title}</p>
              <p className="post-content">{elem.content}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
