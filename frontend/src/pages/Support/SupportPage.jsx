import { Link } from "react-router-dom";
import {
    Shield,
    Users,
    Scale,
    Ambulance,
    Phone,
    ExternalLink,
} from "lucide-react";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-500 mb-8">
                <Link to="/dashboard">Dashboard</Link>

                <span>›</span>

                <span className="text-black font-medium">Help & Support</span>
            </div>

            {/* Title */}

            <h1 className="text-3xl font-bold text-blue-900 mb-2">
                Help & Emergency Support
            </h1>

            <p className="text-gray-500 mb-8">
                Access critical emergency contacts and official government assistance
                instantly.
            </p>

            {/* Emergency Section */}

            <h2 className="font-semibold text-lg mb-4">Emergency Contacts</h2>

            <div className="grid grid-cols-3 gap-6 mb-10">
                {/* Police */}
                <div className="bg-white border-2 border-red-500 rounded-xl p-6 text-center">
                    <Shield className="mx-auto text-red-500 mb-2" />

                    <h3 className="font-semibold">Police</h3>

                    <p className="text-3xl text-red-600 font-bold">100</p>

                    <p className="text-gray-500 text-sm">Tap to call instantly</p>
                </div>

                {/* Women */}
                <div className="bg-white border-2 border-red-500 rounded-xl p-6 text-center">
                    <Users className="mx-auto text-red-500 mb-2" />

                    <h3 className="font-semibold">Women Helpline</h3>

                    <p className="text-3xl text-red-600 font-bold">1091</p>

                    <p className="text-gray-500 text-sm">Tap to call instantly</p>
                </div>

                {/* Legal */}
                <div className="bg-white border-2 border-orange-500 rounded-xl p-6 text-center">
                    <Scale className="mx-auto text-orange-500 mb-2" />

                    <h3 className="font-semibold">Legal Aid</h3>

                    <p className="text-3xl text-orange-600 font-bold">1516</p>

                    <p className="text-gray-500 text-sm">Free legal services</p>
                </div>

                {/* Ambulance */}
                <div className="bg-white border-2 border-red-500 rounded-xl p-6 text-center">
                    <Ambulance className="mx-auto text-red-500 mb-2" />

                    <h3 className="font-semibold">Ambulance</h3>

                    <p className="text-3xl text-red-600 font-bold">108</p>

                    <p className="text-gray-500 text-sm">Medical emergency</p>
                </div>
            </div>

            {/* Government Support */}

            <h2 className="font-semibold text-lg mb-4">Government Support</h2>

            <div className="space-y-4 mb-10">
                <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-blue-900">
                            Citizen Grievance Portal
                        </h3>

                        <p className="text-gray-500 text-sm">
                            Register and track official complaints with government
                            departments.
                        </p>
                    </div>

                    <ExternalLink className="text-gray-400" />
                </div>

                <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-blue-900">
                            National Consumer Helpline
                        </h3>

                        <p className="text-gray-500 text-sm">
                            Report consumer fraud, misleading ads, and service deficiencies.
                        </p>
                    </div>

                    <ExternalLink className="text-gray-400" />
                </div>

                <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-blue-900">RTI Assistance</h3>

                        <p className="text-gray-500 text-sm">
                            File Right to Information requests and get transparency guidance.
                        </p>
                    </div>

                    <ExternalLink className="text-gray-400" />
                </div>
            </div>

            {/* Buttons */}

            <div className="flex gap-6">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                    <Phone size={16} />
                    Call General Helpline
                </button>

                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
                    Chat with AI Assistant
                </button>
            </div>
        </div>
    );
}
