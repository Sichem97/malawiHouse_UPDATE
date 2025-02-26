import { useEffect } from 'react';
import { Routes,Route } from 'react-router';
import './App.css';
import './Components/AdditionlCSS/css/bootstrap.css'
import './Components/AdditionlCSS/css/style.css'
import './Components/AdditionlCSS/css/fonts.css'
import Home from './Home';
import Services from './Components/Services/Services'
import About from './Components/AboutUs/About';
import Contact from './Components/Contact/Contact'
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Blog from './Components/Blog/Blog';



function App() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "Assets/js/core.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "Assets/js/script.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
    };
}, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contacts' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
