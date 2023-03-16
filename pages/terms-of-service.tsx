import styles from '@/styles/pages/TermsOfService.module.css';

export default function TermsOfService() {
  return (
    <section className="min-h-screen pb-0">
      <h2>Terms of Service</h2>
      <div className="flex flex-col gap-8">
        <ul className="list-disc pl-4">
          <li>Price is for personal use (2x - 3x for commercial use)</li>
          <li>Full upfront or 50% payment upfront, 50% after sketch approved</li>
          <li>No refund once I started working on the commission</li>
          <li>Unlimited revision at sketch, only minor revision afterward</li>
          <li>Estimated to be finished around 1 - 2 weeks</li>
          <li>The file will be in JPG and PNG Transparent</li>
          <li>
            I&apos;ll use finished pieces for my sample & portfolio, unless client doesn&apos;t
            allow it
          </li>
        </ul>

        <div>
          <h3 className="text-orange-500">Note:</h3>
          <p>I can work from description, but visual reference work best for me!</p>
        </div>
        <div>
          <h3 className="text-red-500">IMPORTANT!</h3>
          <p>By commissioning me, you are agreed to my Terms of Service</p>
        </div>
      </div>
    </section>
  );
}
