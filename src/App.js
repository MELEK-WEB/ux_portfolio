import AboutMe from "./components/AboutMe";
import Menu from "./components/Menu";
import  './App.css'
import MyServices from "./components/MyServices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="LandingPage">
          <Menu/>
          <AboutMe/>
          <MyServices />
          <Contact/>
          <Footer/>
     
    </div> 
  );
}

export default App;
