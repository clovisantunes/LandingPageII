import About from './components/About';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/Navbar';
import Services from './components/Services';


export default function Home() {
  return (
    <main >
     <NavBar />
     <Main />
     <About />
     <Services />
     <Emergency />
     <Footer />
    </main>
  );
}
