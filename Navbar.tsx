'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      background: '#f0f0f0'
    }}>
      <Link 
        href="/" 
        style={{ 
          fontWeight: pathname === '/' ? 'bold' : 'normal',
          color: pathname === '/' ? 'blue' : 'black'
        }}
      >
        Home
      </Link>
      <Link 
        href="/about"
        style={{ 
          fontWeight: pathname === '/about' ? 'bold' : 'normal',
          color: pathname === '/about' ? 'blue' : 'black'
        }}
      >
        About
      </Link>
      <Link 
        href="/contact"
        style={{ 
          fontWeight: pathname === '/contact' ? 'bold' : 'normal',
          color: pathname === '/contact' ? 'blue' : 'black'
        }}
      >
        Contact
      </Link>
    </nav>
  );
}