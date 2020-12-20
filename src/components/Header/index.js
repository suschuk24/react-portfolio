import React, { useEffect } from 'react'


function Header({currentPage, setPage}) {

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (
        <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
             Seth Uschuk's React Portfolio
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about" onClick={() => setPage('About Me')} className='navLinks'>About Me
              </a>
              <a data-testid="about" href="#about" onClick={() => setPage('Projects')} className='navLinks'>Projects
              </a>
              <a data-testid="about" href="#about" onClick={() =>  setPage('Contact')} className='navLinks'>Contact
              </a>
            </li>
            {/* {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name && !contactSelected && 'navActive'
                  }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))} */}
          </ul>
        </nav>
      </header>
        // <div className="App">
        //     <header className="App-header">
        //         <h1>
        //             <a href="/"></a>
        //         </h1>
        //         <nav>
        //             <ul className="flex-row">
        //                 <li className="mx-2">
        //                     <a href="#about">
        //                         About me
        //                     </a>
        //                 </li>
        //                 {pages.map((page) => (
        //                 <li
        //                     className="mx-1"
        //                     key={page.name}
        //                 >
        //                     <span>
        //                         {page.name}
        //                     </span>
        //                 </li>
        //                 ))}
        //             </ul>
        //         </nav>
        //     </header>
        // </div>
    )
}

export default Header