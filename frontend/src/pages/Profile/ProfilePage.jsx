import { Link } from "react-router-dom";
import { User, Phone, Globe, FileText, AlertTriangle, Scale } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-500 mb-8">

        <Link to="/dashboard">Dashboard</Link>

        <span>›</span>

        <span className="text-black font-medium">
          My Profile
        </span>

      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-900 mb-2">
        My Profile
      </h1>

      <p className="text-gray-500 mb-8">
        Manage your personal information and activity history.
      </p>

      {/* USER CARD */}

      <div className="bg-white p-6 rounded-xl shadow mb-8 flex justify-between items-center">

        <div className="flex items-center gap-4">

          <div className="bg-gray-200 p-4 rounded-full">
            <User size={28} />
          </div>

          <div>

            <h2 className="text-lg font-semibold">
              Citizen User
            </h2>

            <p className="text-gray-500 flex items-center gap-1">
              <Phone size={14} />
              +91 98765 43210
            </p>

            <p className="text-gray-500 flex items-center gap-1">
              <Globe size={14} />
              Preferred Language: English
            </p>

          </div>

        </div>

        <button className="border px-4 py-2 rounded-lg">
          Edit Profile
        </button>

      </div>

      {/* ACTIVITY HISTORY */}

      <h2 className="text-lg font-semibold text-blue-900 mb-4">
        Activity History
      </h2>

      {/* SCHEME HISTORY */}

      <div className="bg-white p-6 rounded-xl shadow mb-6">

        <h3 className="font-semibold mb-4">
          Recent Scheme Searches
        </h3>

        <div className="space-y-4">

          <div className="flex gap-3">

            <FileText className="text-orange-500" />

            <div>

              <p className="font-medium">
                PM Kisan Samman Nidhi
              </p>

              <p className="text-gray-500 text-sm">
                Checked eligibility criteria and documents.
              </p>

              <p className="text-gray-400 text-xs">
                12 Oct 2023, 10:30 AM
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <FileText className="text-orange-500" />

            <div>

              <p className="font-medium">
                Ayushman Bharat Scheme
              </p>

              <p className="text-gray-500 text-sm">
                Searched for nearby hospitals.
              </p>

              <p className="text-gray-400 text-xs">
                05 Oct 2023, 02:15 PM
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* COMPLAINT HISTORY */}

      <div className="bg-white p-6 rounded-xl shadow mb-6">

        <h3 className="font-semibold mb-4">
          Complaint History
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between">

            <div className="flex gap-3">

              <AlertTriangle className="text-blue-500" />

              <div>

                <p className="font-medium">
                  Streetlight not working
                </p>

                <p className="text-gray-500 text-sm">
                  Complaint ID: BM-2023-8942
                </p>

                <p className="text-gray-400 text-xs">
                  08 Oct 2023
                </p>

              </div>

            </div>

            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
              Resolved
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex gap-3">

              <AlertTriangle className="text-blue-500" />

              <div>

                <p className="font-medium">
                  Pothole on Main Road
                </p>

                <p className="text-gray-500 text-sm">
                  Complaint ID: BM-2023-9105
                </p>

                <p className="text-gray-400 text-xs">
                  15 Oct 2023
                </p>

              </div>

            </div>

            <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-xs">
              In Progress
            </span>

          </div>

        </div>

      </div>

      {/* LEGAL HISTORY */}

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h3 className="font-semibold mb-4">
          Legal Queries
        </h3>

        <div className="flex gap-3">

          <Scale className="text-orange-500" />

          <div>

            <p className="font-medium">
              Tenant Rights Inquiry
            </p>

            <p className="text-gray-500 text-sm">
              Asked about eviction notice periods.
            </p>

            <p className="text-gray-400 text-xs">
              18 Oct 2023, 09:45 AM
            </p>

          </div>

        </div>

      </div>

      {/* ACTION BUTTONS */}

      <div className="flex gap-6">

        <button className="border px-6 py-3 rounded-lg">
          Download Records
        </button>

        <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg">
          Logout
        </button>

      </div>

    </div>
  );
}
