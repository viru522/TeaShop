import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeaCard({ item, onAdd }) {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%"
      }
    });
  }, []);

  return (
    <div ref={ref} className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">₹ {item.price}</p>
      <button
        onClick={() => onAdd(item)}
        className="mt-3 bg-amber-800 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
}