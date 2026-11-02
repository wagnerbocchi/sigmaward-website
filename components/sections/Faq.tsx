export default function Faq({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="site-container reading-section">
      <h2>{title}</h2>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
