import { Header, Footer, Skills, Projects, Contact, Navbar } from "./components";
import "./app.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      {/* \
      <Footer />
      
      
      <Contact /> */}
    </div>
  );
}

export default App;
