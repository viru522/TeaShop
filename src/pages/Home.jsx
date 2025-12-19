import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const title = useRef();
  const text = useRef();

  useEffect(() => {
    gsap.from([title.current, text.current], {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });
  }, []);

  return (
    <section className="h-[80vh] flex flex-col justify-center items-center bg-amber-50 text-center">
      <h1 ref={title} className="text-5xl font-bold text-amber-900 mb-4">
        Fresh Tea. Real Taste.
      </h1>
      <p ref={text} className="text-lg text-gray-700">
        Brewed with care and tradition.
      </p>
    </section>
  );
}