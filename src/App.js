import { Header, Footer, Skills, Projects, Contact, Navbar } from "./components";
import "./app.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      {/* \
      <Footer />
      
      
       */}
    </div>
  );
}

export default App;
