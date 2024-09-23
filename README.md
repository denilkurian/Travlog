# Create React App

The project Travlog has been created in react.js (javascript libray ) and `npx create-react-app` is used for insallation

## Folders

Inside src folder have the following folders and files : 

travlog_contents -- all functional components (Eg: Navbar,Footer,Services,Landing page)

images -- assigned the images for all components and uses path for getting the images

css -- for all external css styles

gilroy -- Font Family used in project

App.js -- rendering and wrap all functional components (Path not used because of one page is rendering)


## installed packages

1. Aos animation package

    Setup Details:
    command - `npm install aos`

    css link `<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />`
    js link ` <script src="https://unpkg.com/aos@next/dist/aos.js"></script>` & `<script> AOS.init(); </script>`
    
    ARIA Attribute - data-aos-*

## React Router Demonstration

Step 1 :
    install react-router - `npm install react-router-dom`

step 2 :
    Create Component Files and export

    src
    ├── components
    │   ├── Home.js
    │   ├── About.js
    │   ├── Contact.js
    ├── App.js
    ├── index.js


step 3 :
    In App.js import the created components and provide url 

    import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    import Home from './components/Home';
    import About from './components/About';
    import Contact from './components/Contact';

    const App = () => {
    return (
        <Router>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router>
    );
    };

    export default App;


## Deplyment Details

Site link - https://travlogbydenil.netlify.app

Command - `npm run build` for creating build folder

Hosted Service - Netlify