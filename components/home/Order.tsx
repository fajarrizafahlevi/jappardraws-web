import styles from '@/styles/pages/home/Order.module.css';

export default function Order() {
  return (
    <section>
      <h2>Order Step:</h2>
      <div>
        <ol className="list-decimal">
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
