import React from 'react';

export default function Footer() {
  return (
    <footer>
      <section>
        <div
          style={{
            width: '160px',
            height: '120px',
            borderRadius: '16px',
            backgroundColor: 'var(--background-primary)',
          }}
        />
        <h4>Jappar Draws</h4>
        <p>2D character illustration</p>
      </section>
      <p>Jappar Draws &copy; 2023</p>
    </footer>
  );
}
