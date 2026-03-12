import { Mic, Send, FileText, AlertTriangle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold">
        Welcome to Bharat Mitra AI
      </h1>

      <p className="text-gray-500 mb-8">
        Your Personal Civic Assistant. How can we help you today?
      </p>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-2 flex flex-col gap-8">

          {/* AI ASSISTANT */}
          <div className="bg-blue-900 text-white rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-4">
              Ask the AI Assistant
            </h2>

            <div className="flex items-center bg-white rounded-lg overflow-hidden">

              <Mic className="ml-3 text-gray-400" size={20} />

              <input
                className="flex-1 p-3 outline-none text-black"
                placeholder="Type or speak your question here..."
              />

              <button className="bg-orange-500 p-3 text-white">
                <Send size={18} />
              </button>

            </div>

          </div>

          {/* QUICK SERVICES */}
          <div>

            <h2 className="text-xl font-semibold mb-6">
              Quick Services
            </h2>

            <div className="grid grid-cols-3 gap-6">

              <Link
                to="/schemes"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <FileText className="text-orange-500 mb-3" />

                <h3 className="font-semibold">
                  Find Government Schemes
                </h3>

                <p className="text-sm text-gray-500">
                  Discover schemes you are eligible for instantly.
                </p>

              </Link>

              <Link
                to="/civic"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <AlertTriangle className="text-orange-500 mb-3" />

                <h3 className="font-semibold">
                  Report Civic Issue
                </h3>

                <p className="text-sm text-gray-500">
                  Report problems like potholes.
                </p>

              </Link>

              <Link
                to="/legal"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <Scale className="text-orange-500 mb-3" />

                <h3 className="font-semibold">
                  Know Your Rights
                </h3>

                <p className="text-sm text-gray-500">
                  Understand your legal rights.
                </p>

              </Link>

            </div>

          </div>

          {/* EMERGENCY HELPLINES */}
          <div className="bg-white p-6 rounded-xl shadow w-full">

            <h3 className="font-semibold mb-4">
              Emergency Helplines
            </h3>

            <div className="space-y-3 max-w-md">

              <div className="flex justify-between bg-red-50 p-3 rounded">
                <span>Police</span>
                <span className="text-red-600 font-bold">100</span>
              </div>

              <div className="flex justify-between bg-red-50 p-3 rounded">
                <span>Women Helpline</span>
                <span className="text-red-600 font-bold">1091</span>
              </div>

              <div className="flex justify-between bg-red-50 p-3 rounded">
                <span>Senior Citizen</span>
                <span className="text-red-600 font-bold">14567</span>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">

          <h3 className="font-semibold mb-4">
            Recent Activity
          </h3>

          <div className="space-y-4 text-sm">

            <div>
              <p className="font-medium">
                Complaint Filed: Broken Streetlight
              </p>
              <span className="text-orange-500 text-xs">
                In Progress
              </span>
            </div>

            <div>
              <p className="font-medium">
                Scheme Search: PM Kisan
              </p>
              <span className="text-green-600 text-xs">
                Completed
              </span>
            </div>

            <div>
              <p className="font-medium">
                Legal Query: Property Registration
              </p>
              <span className="text-green-600 text-xs">
                Answered
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
