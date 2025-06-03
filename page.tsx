import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to My Assignment App</h1>
        <p>This is my CPAN144 Assignment 1 submission</p>
        
        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About Page →</h2>
            <p>Learn more about this application</p>
          </Link>
          
          <Link href="/contact" className={styles.card}>
            <h2>Contact Page →</h2>
            <p>View the contact form and components</p>
          </Link>
        </div>
      </main>
    </div>
  );
}