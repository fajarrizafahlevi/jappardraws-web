export default function Testimonies() {
  const platforms = [
    {
      id: 1,
      name: 'Fiverr',
      rating: '5 stars',
    },
    {
      id: 2,
      name: 'Artists&Clients',
      rating: '5 stars',
    },
    {
      id: 3,
      name: 'Sketchmob',
      rating: '5 stars',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Name',
      opinion: 'Opinion',
    },
    {
      id: 2,
      name: 'Name',
      opinion: 'Opinion',
    },
    {
      id: 3,
      name: 'Name',
      opinion: 'Opinion',
    },
  ];

  return (
    <section>
      <h2>What they said</h2>

      <div className="flex gap-8">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="flex flex-col text-center"
          >
            <h3 className="font-bold">{platform.name}</h3>
            <p>{platform.rating}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative flex justify-center gap-8"
          >
            <div className="w-60 h-80 rounded bg-gray-900" />
            <div className="absolute bottom-8">
              <h3 className="font-bold">{review.name}</h3>
              <p>{review.opinion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
