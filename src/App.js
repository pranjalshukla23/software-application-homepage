import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <header>
        <Header />
      </header>
        <main>
            <Content />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  );
}

export default App;
