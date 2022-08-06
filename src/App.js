import { Header, Footer, Skills, Projects, Contact, Navbar } from "./components";
import "./app.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* \
      <Header />
      <Footer />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
