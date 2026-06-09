export default function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-green-700" style={{ fontSize: 20, fontWeight: 700 }}>{value}</p>
      <p className="text-gray-500" style={{ fontSize: 11 }}>{label}</p>
    </div>
  );
}