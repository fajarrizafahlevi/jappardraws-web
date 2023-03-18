import sample from '@/public/images/sample.jpg';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <section className="bg-gray-900">
      <h2>Recent Work</h2>
      <Image
        src={sample}
        alt="sample"
        width={240}
        height={320}
        className="rounded"
      />
    </section>
  );
}
