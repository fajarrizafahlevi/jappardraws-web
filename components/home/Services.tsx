import Image from "next/image";
import colorSketch from "@/public/images/samples/colorSketch.jpg";
import celShade from "@/public/images/samples/celShade.jpg";
import fullRender from "@/public/images/samples/fullRender.jpg";

export default function Service() {
  const menu = [
    {
      id: 1,
      style: "Color Sketch",
      price: {
        headShot: "80K IDR / 15 USD",
        bustUp: "120K IDR / 20 USD",
        halfBody: "160K IDR / 25 USD",
        fullBody: "240K IDR / 35 USD",
      },
      sample: colorSketch,
    },
    {
      id: 2,
      style: "Cel Shade",
      price: {
        headShot: "80K IDR / 15 USD",
        bustUp: "120K IDR / 20 USD",
        halfBody: "160K IDR / 25 USD",
        fullBody: "240K IDR / 35 USD",
      },
      sample: celShade,
    },
    {
      id: 3,
      style: "Full Render",
      price: {
        headShot: "100K IDR / 20 USD",
        bustUp: "150K IDR / 25 USD",
        halfBody: "200K IDR / 30 USD",
        fullBody: "300K IDR / 40 USD",
      },
      sample: fullRender,
    },
  ];

  return (
    <section className="flex-col">
      <h2>The Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menu.map((item) => (
          <div key={item.id} className="card container w-60 h-80">
            <Image
              src={item.sample}
              alt="sample"
              width={240}
              height={320}
              className="absolute w-full h-full object-cover object-top"
            />
            <div className="absolute z-10 w-full h-full p-8 bg-gradient-to-t from-black flex flex-col justify-end items-center">
              <h3 className="accent font-bold">{item.style}</h3>
              <table className="text-xs">
                <tr>
                  <th>Head-shot</th>
                  <td>{item.price.headShot}</td>
                </tr>
                <tr>
                  <th>Bust-up</th>
                  <td>{item.price.bustUp}</td>
                </tr>
                <tr>
                  <th>Half-body</th>
                  <td>{item.price.halfBody}</td>
                </tr>
                <tr>
                  <th>Full-body</th>
                  <td>{item.price.fullBody}</td>
                </tr>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
