import { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/mesarg-icon-new.svg?react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* LOGO */}
      <div className="logo-container">
        <Logo className={`logo-icon ${scrolled ? "logo-scrolled" : ""}`} />
      </div>

      {/* NAV LINKS */}
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Products</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;