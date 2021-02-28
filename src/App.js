import React, { useState } from "react";
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




library.add(fab, faLinkedin, faGithub)

function App() {
  const [currentPage, setPage] = useState('About Me');

  const page = () => {
    switch (currentPage) {
      default:
        return <About />;
      case 'Projects':
        return <Work />;
      case 'Contact': 
        return <ContactForm />
      case 'Resume':
        return <Resume />
    }

  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setPage={setPage}/>

      <main className="App">
        {page()}
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
