import { CheckCircle, FileText, Send } from "lucide-react";

export default function SchemeCard({
  title,
  description,
  eligibility,
  benefits,
  documents
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-orange-500">

      {/* Title */}
      <div className="flex justify-between mb-2">

        <h2 className="text-lg font-semibold text-blue-900">
          {title}
        </h2>

        <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
          Active
        </span>

      </div>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Info Grid */}
      <div className="grid grid-cols-3 gap-6 bg-gray-100 p-4 rounded-lg mb-4">

        <div>
          <p className="text-xs text-gray-500 mb-1">
            ELIGIBILITY
          </p>

          <p className="flex items-center gap-1">
            <CheckCircle size={16} className="text-green-500" />
            {eligibility}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">
            BENEFITS AMOUNT
          </p>

          <p>{benefits}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">
            DOCUMENTS REQUIRED
          </p>

          <p className="flex items-center gap-1">
            <FileText size={16} className="text-orange-500" />
            {documents}
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">

        <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg">
          View Details
        </button>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Send size={16} />
          Apply Now
        </button>

      </div>

    </div>
  );
}
