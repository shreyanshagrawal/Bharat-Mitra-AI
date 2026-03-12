import { Search } from "lucide-react";
import SchemeCard from "./SchemeCard";
import { Link } from "react-router-dom";

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-500 mb-8">
        <Link to="/dashboard">Dashboard</Link>
        <span>›</span>
        <span className="font-medium text-black">Schemes</span>
      </div>

      {/* Search + Filters */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <div className="flex items-center border rounded-lg px-3 py-2 mb-4">

          <Search size={18} className="text-gray-400 mr-2" />

          <input
            placeholder="Search schemes..."
            className="flex-1 outline-none"
          />

        </div>

        <div className="flex gap-3">

          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
            Student
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Farmer
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Women
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Senior Citizen
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Business
          </button>

        </div>

      </div>

      {/* Scheme List */}

      <div className="space-y-6">

        <SchemeCard
          title="PM Vidyalaxmi Scheme"
          description="Financial assistance for meritorious students from economically weaker sections."
          eligibility="Family income < ₹8 Lakhs"
          benefits="Up to ₹10,000 / year"
          documents="Aadhaar, Income Certificate"
        />

        <SchemeCard
          title="National Means-cum-Merit Scholarship"
          description="Awarded to meritorious students whose parental income is below ₹3,50,000."
          eligibility="Class 8th Pass (55%)"
          benefits="₹12,000 / year"
          documents="Marksheet, Bank Details"
        />

      </div>

    </div>
  );
}
