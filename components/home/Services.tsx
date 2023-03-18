import sample from '@/public/images/sample.jpg';
import Image from 'next/image';

export default function Service() {
  const menu = [
    {
      id: 1,
      style: 'Color Sketch',
      price: {
        headShot: '80K IDR / 15 USD',
        bustUp: '120K IDR / 20 USD',
        halfBody: '160K IDR / 25 USD',
        fullBody: '240K IDR / 35 USD',
      },
    },
    {
      id: 2,
      style: 'Cel Shade',
      price: {
        headShot: '80K IDR / 15 USD',
        bustUp: '120K IDR / 20 USD',
        halfBody: '160K IDR / 25 USD',
        fullBody: '240K IDR / 35 USD',
      },
    },
    {
      id: 3,
      style: 'Full Render',
      price: {
        headShot: '100K IDR / 20 USD',
        bustUp: '150K IDR / 25 USD',
        halfBody: '200K IDR / 30 USD',
        fullBody: '300K IDR / 40 USD',
      },
    },
  ];

  return (
    <section className="flex-col">
      <h2>The Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {menu.map((item) => (
          <div
            key={item.id}
            className="relative container w-60 h-80 rounded bg-gray-900 overflow-hidden hover:cursor-pointer"
          >
            <Image
              src={sample}
              alt="sample"
              width={240}
              height={320}
              className="absolute rounded object-cover"
            />
            <div className="absolute z-10 w-full h-full p-8 rounded bg-gradient-to-t from-black flex flex-col justify-end items-center">
              <h3 className="font-bold text-yellow-300 mb-3">{item.style}</h3>
              <div className="text-xs">
                <p>Head-shot: {item.price.headShot}</p>
                <p>Bust-up: {item.price.bustUp}</p>
                <p>half-body: {item.price.halfBody}</p>
                <p>Full-body: {item.price.fullBody}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
