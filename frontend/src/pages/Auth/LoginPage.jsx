import { User, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-md w-[420px]">

        <h1 className="text-2xl font-bold text-center">
          Access Bharat Mitra AI
        </h1>

        <p className="text-gray-500 text-center mt-1">
          Your Personal Civic Assistant
        </p>

        {/* Continue as guest */}
        <button className="flex items-center justify-center gap-2 w-full border rounded-lg py-3 mt-6 hover:bg-gray-50">
          <User size={18} />
          Continue as Guest
        </button>

        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        {/* Mobile input */}
        <label className="text-sm font-medium">
          Mobile Number
        </label>

        <div className="flex border rounded-lg overflow-hidden mt-2">
          <span className="bg-gray-100 px-3 flex items-center">
            +91
          </span>

          <input
            type="text"
            placeholder="Enter 10-digit mobile number"
            className="flex-1 p-3 outline-none"
          />
        </div>

        {/* OTP button */}
        <button className="bg-orange-500 text-white w-full py-3 rounded-lg mt-5 flex justify-center items-center gap-2">
          Send OTP
          <ArrowRight size={16} />
        </button>

        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        {/* Aadhaar login */}
        <button className="bg-blue-900 text-white w-full py-3 rounded-lg">
          Login with Aadhaar
        </button>

        {/* Benefits */}
        <div className="mt-6 text-sm text-gray-600">
          <p className="font-semibold mb-2">
            Benefits of logging in
          </p>

          <ul className="space-y-1">
            <li>✔ Track your civic complaints</li>
            <li>✔ Save government scheme searches</li>
            <li>✔ Get personalized legal assistance</li>
          </ul>
        </div>

      </div>

      {/* footer strip */}
      <div className="bg-blue-900 text-white w-full text-center py-4 mt-10">
        National Helpline: 14404 | Women Helpline: 1091 | Senior Citizen: 14567
      </div>

    </div>
  );
}
