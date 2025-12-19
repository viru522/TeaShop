import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.8
    });
  }, []);

  return (
    <nav ref={navRef} className="bg-amber-900 text-white px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl">Tea Shop</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}