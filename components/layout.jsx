import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
  <>
    <Navbar></Navbar>
    <main>{children}</main>
    <Footer></Footer>
  </>
  );
}
