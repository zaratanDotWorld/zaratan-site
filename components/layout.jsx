import Link from 'next/link';
import Navbar from '../components/navbar';
import Head from '../components/head';

export default function Layout({ children }) {
  return (
  <>
    <Head siteName="Zaratan"></Head>
    <Navbar></Navbar>
    <main>{children}</main>
    <div className="text-center p-3 bg-light">
      &copy; { new Date().getFullYear() } Kronosapiens Labs
      <br></br> <Link href="/privacy.html" style={{ fontSize: "14px" }}>Privacy Policy</Link>
    </div>
  </>
  );
}
