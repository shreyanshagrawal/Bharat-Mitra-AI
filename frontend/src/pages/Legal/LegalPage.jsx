import { Search, Scale, User, BookOpen, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-500 mb-8">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <span>›</span>

        <span className="text-black font-medium">
          Know Your Rights
        </span>

      </div>

      {/* Search */}
      <div className="flex items-center bg-white rounded-xl shadow px-4 py-3 max-w-3xl mx-auto mb-6">

        <Search className="text-gray-400 mr-3" size={18} />

        <input
          placeholder="My landlord is asking me to vacate without notice. What are my rights?"
          className="flex-1 outline-none"
        />

        <button className="bg-orange-500 text-white p-2 rounded-full ml-3">
          →
        </button>

      </div>

      {/* Suggested Topics */}

      <div className="flex gap-3 justify-center mb-10 flex-wrap">

        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Tenant rights
        </button>

        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Consumer rights
        </button>

        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Workplace rights
        </button>

        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Women's safety laws
        </button>

      </div>

      {/* Legal Card */}

      <div className="bg-white border border-blue-300 rounded-xl p-8 max-w-3xl mx-auto shadow">

        <div className="flex items-center gap-2 mb-6">

          <Scale className="text-blue-900" />

          <h2 className="text-xl font-semibold text-blue-900">
            Legal Rights Explained
          </h2>

        </div>

        {/* Situation */}

        <div className="mb-6">

          <h3 className="font-semibold flex items-center gap-2">
            <User size={16} />
            Your Situation
          </h3>

          <p className="text-gray-600 mt-1">
            You have stated that your landlord is asking you to vacate
            without providing any prior notice.
          </p>

        </div>

        {/* Law */}

        <div className="mb-6">

          <h3 className="font-semibold flex items-center gap-2">
            <BookOpen size={16} />
            Explanation of Law
          </h3>

          <p className="text-gray-600 mt-1">
            Under the Rent Control Acts applicable in various states in India,
            a landlord cannot evict a tenant without due process of law.
            Even if there is no formal rent agreement, a month-to-month tenancy
            is generally presumed which requires written notice before eviction.
          </p>

        </div>

        {/* What You Can Do */}

        <div className="mb-6">

          <h3 className="font-semibold flex items-center gap-2">
            <CheckCircle size={16} />
            What You Can Do
          </h3>

          <ul className="text-gray-600 list-disc ml-6 mt-2">

            <li>Do not vacate immediately.</li>

            <li>Request a written eviction notice.</li>

            <li>Continue paying rent and keep receipts.</li>

            <li>If threatened, file a police complaint.</li>

          </ul>

        </div>

        {/* Help */}

        <div className="mb-6">

          <h3 className="font-semibold flex items-center gap-2">
            <MapPin size={16} />
            Where to Get Help
          </h3>

          <p className="text-gray-600 mt-1">
            Approach your local Rent Controller Court or seek assistance
            from District Legal Services Authority (DLSA) for free legal aid.
          </p>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-6">

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
            Find Legal Aid
          </button>

          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg">
            Contact Helpline
          </button>

        </div>

      </div>

      {/* Disclaimer */}

      <p className="text-center text-gray-400 text-sm mt-8">

        Disclaimer: This platform provides general legal awareness,
        not professional legal advice.

      </p>

    </div>
  );
}
