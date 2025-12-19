import menu from "../data/teaData";
import TeaCard from "../components/TeaCard";

export default function Menu({ addToCart }) {
  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {menu.map(item => (
        <TeaCard key={item.id} item={item} onAdd={addToCart} />
      ))}
    </div>
  );
}