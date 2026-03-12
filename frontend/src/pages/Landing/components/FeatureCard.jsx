export default function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow text-center">

      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {desc}
      </p>

    </div>
  );
}
