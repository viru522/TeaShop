export default function CartModal({ cart, setCart }) {
  if (cart.length === 0) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    setCart([]);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-xl p-4 w-72 rounded">
      <h3 className="font-bold mb-2">Order</h3>

      {cart.map(item => (
        <div key={item.id} className="flex justify-between text-sm">
          <span>{item.name} x {item.qty}</span>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <hr className="my-2" />
      <p className="font-semibold">Total: ₹{total}</p>

      <button
        onClick={placeOrder}
        className="mt-3 w-full bg-green-700 text-white py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}