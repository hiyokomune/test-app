import styles from'./Header.module.css';

export default function Header() {
  return (
  <header className={styles.header}>
      <a href='/' className={styles.headerLink}>Blog</a>
      <a href='' className={styles.headerLink}>お問い合わせ</a>
    </header>
  )
}