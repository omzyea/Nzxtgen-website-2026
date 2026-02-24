import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow page to render, then scroll to the hash target
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          const navbarHeight = 100;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
