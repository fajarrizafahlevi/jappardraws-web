import styles from '@/styles/pages/home/Order.module.css';

export default function Order() {
  return (
    <section className={styles.order}>
      <h2>How to order</h2>
      <div className={styles.container}>
        <ol className={styles.list}>
          <li>Message me and tell me what you need to draw about your character</li>
          <li>
            Please provide the references of your character, including the outfit and the pose if
            possible
          </li>
          <li>When all the requirements above are met, I will start working from the sketch</li>
        </ol>
      </div>
    </section>
  );
}
