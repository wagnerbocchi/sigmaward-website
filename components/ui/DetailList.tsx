import Icon from "@/components/ui/Icon";
export default function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
