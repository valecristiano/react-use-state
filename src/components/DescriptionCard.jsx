export default function DescriptionCard({ title, description }) {
  return (
    <div className="card p-4">
      <h1 className="h4">{title}</h1>
      {description}
    </div>
  );
}
