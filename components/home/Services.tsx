export default function Service() {
  const menu = [
    {
      id: 1,
      style: 'Color Sketch',
      price: '80K IDR / 15 USD',
    },
    {
      id: 2,
      style: 'Cel Shade',
      price: '80K IDR / 15 USD',
    },
    {
      id: 3,
      style: 'Full Render',
      price: '100K IDR / 20 USD',
    },
  ];

  return (
    <section className="flex-col">
      <h2>The Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {menu.map((item) => (
          <div
            key={item.id}
            className="relative flex justify-center gap-8"
          >
            <div className="w-60 h-80 rounded bg-gray-900" />
            <div className="absolute bottom-8">
              <h3 className="font-bold text-yellow-300">{item.style}</h3>
              <p>Start from</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
