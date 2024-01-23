import Link from "next/link";

export default function Home() {
  return (
    <main className=''>
      Helo From next js
      <ul>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
      </ul>
    </main>
  );
}
