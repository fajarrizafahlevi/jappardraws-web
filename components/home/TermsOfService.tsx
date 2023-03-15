import styles from '@/styles/pages/home/TermsOfService.module.css';

export default function TermsOfService() {
  return (
    <section className={styles.tos}>
      <h2>Terms of Service</h2>
      <div className={styles.layout}>
        <div className={styles.container}>
          <ul className={styles.rules}>
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
        </div>
        <div>
          <h3 className={styles.note}>Note</h3>
          <p>I can work from description, but visual reference work best for me!</p>
        </div>
        <div>
          <h3 className={styles.important}>IMPORTANT!</h3>
          <p>By commissioning me, you are agreed to my Terms of Service</p>
        </div>
      </div>
    </section>
  );
}
