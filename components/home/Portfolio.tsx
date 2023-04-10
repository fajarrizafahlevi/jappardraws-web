import recent from '@/public/images/recent.jpg';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <section>
      <h2>Recent Work</h2>
      <Image
        src={recent}
        alt="recent"
        width={240}
        height={320}
        className="rounded"
      />
    </section>
  );
}
