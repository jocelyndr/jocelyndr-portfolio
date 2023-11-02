import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contacts from "./components/Contacts/contacts";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
