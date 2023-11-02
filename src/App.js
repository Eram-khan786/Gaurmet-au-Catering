import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import { Link } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/Home";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <nav className={styles.fixingNavbar}>
        <div className={styles.navbar}>
          <div>
            <p>G a u r m e t &nbsp; a u  &nbsp; C a t e r i n g</p>
          </div>
          <div className={styles.name}>
            <Link className={styles.link} to="/">Main</Link>
            <Link className={styles.link} to="/Home"></Link>
            <Link className={styles.link} to="/about">About</Link>
            <Link className={styles.link} to="/menu">Menu</Link>
            <Link className={styles.link} to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
