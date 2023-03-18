export default function Testimonies() {
  const reviews = [
    {
      id: 1,
      name: 'Zero11',
      platform: 'Artist&Clients',
      opinion:
        "Absolutely a joy to work with, quick replies and updates, friendly and great work. I'd recommend to anyone looking for a quality piece like this!",
    },
    {
      id: 2,
      name: 'newtype_allen13',
      platform: 'Fiverr',
      opinion:
        "Jappar is very good at what he does! He's very responsive and was willing to work with me every step of the way. He's very patient and also understanding! I would highly recommend him to draw any character you like in his unique art style!",
    },
    {
      id: 3,
      name: 'ginjaninja99',
      platform: 'Fiverr',
      opinion:
        'This is the first artist I have hired on this site and I must say I think I found one of the best ones. Jappar is very communicative during the process of producing your piece and ensures that small and minor details are perfect and make you feel apart of the process.',
    },
  ];

  return (
    <section>
      <h2>What they said</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative"
          >
            <div className="w-64 h-80 rounded bg-gray-900" />
            <div className="absolute top-0 p-6 text-center">
              <h3 className="font-bold text-yellow-300">{review.name}</h3>
              <span className="text-xs text-gray-500">on {review.platform}</span>
              <p className="text-sm mt-4">{review.opinion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
