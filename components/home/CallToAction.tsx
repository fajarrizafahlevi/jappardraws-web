import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-gray-900">
      <h2>Ready to order?</h2>
      <Link href="/contact">
        <button>Contact me</button>
      </Link>
    </section>
  );
}
