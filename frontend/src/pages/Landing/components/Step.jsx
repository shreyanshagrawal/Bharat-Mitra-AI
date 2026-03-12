export default function Step({ title, desc }) {
  return (
    <div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {desc}
      </p>

    </div>
  );
}
