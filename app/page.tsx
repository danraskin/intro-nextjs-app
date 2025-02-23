import Link from 'next/link';
import styles from '../styles/home.module.css';

export default async function Home() {
  return <div className={styles.home}>
    <div>
      <div>DAN RASKIN</div>
      <div>
        <Link href="/blog">Check out my blog</Link>
      </div>
      <div>
        <Link href="/contact">Contact me</Link>
      </div>
    </div>
  </div>
}
