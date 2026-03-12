import React from "react";
import {
  Search,
  Mic,
  Send,
  FileText,
  AlertTriangle,
  Scale,
  History,
  Phone,
  Shield,
  User,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* --- Navbar --- */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-1.5 rounded-lg">
            <Shield className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-orange-600">
            Bharat Mitra AI
          </span>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Ask anything about government services"
              className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium hover:bg-slate-100 px-3 py-1.5 rounded-md transition-colors">
            <Globe className="w-4 h-4" /> English
          </button>
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-12 gap-8">
          {/* --- Left Column: Hero & Quick Services --- */}
          <div className="col-span-8 space-y-8">
            <section>
              <h1 className="text-3xl font-bold mb-1">
                Welcome to Bharat Mitra AI
              </h1>
              <p className="text-slate-500">
                Your Personal Civic Assistant. How can we help you today?
              </p>
            </section>

            {/* AI Assistant Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0a1b4d] rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Decorative Robot Background Icon */}
              <div className="absolute right-0 bottom-0 opacity-10">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2V8a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2z" />
                </svg>
              </div>

              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="bg-white/20 p-1 rounded-md">
                  <Mic className="w-4 h-4" />
                </div>
                <span className="font-semibold text-lg">
                  Ask the AI Assistant
                </span>
              </div>

              <div className="relative flex items-center bg-white rounded-xl p-2 shadow-xl">
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <Mic className="text-slate-500 w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type or speak your question here..."
                  className="flex-1 px-4 outline-none text-slate-700"
                />
                <button className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded-xl transition-transform active:scale-95 shadow-lg shadow-orange-500/30">
                  <Send className="text-white w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Quick Services Grid */}
            <section>
              <h3 className="text-xl font-bold mb-6">Quick Services</h3>
              <div className="grid grid-cols-3 gap-6">
                <ServiceCard
                  icon={<FileText className="text-orange-600" />}
                  title="Find Government Schemes"
                  desc="Discover schemes you are eligible for instantly."
                  actionText="Check Eligibility"
                  link="/dashboard/schemes"
                  />
                <ServiceCard
                  icon={<AlertTriangle className="text-orange-600" />}
                  title="Report Civic Issue"
                  desc="Report problems in your area like potholes."
                  actionText="Report Issue"
                  link="/dashboard/dashboard_report_issue"
                />
                <ServiceCard
                  icon={<Scale className="text-orange-600" />}
                  title="Know Your Rights"
                  desc="Understand your legal rights in simple language."
                  actionText="Ask Legal AI"
                />
              </div>
            </section>
          </div>

          {/* --- Right Column: Activity & Helplines --- */}
          <div className="col-span-4 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <History className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold">Recent Activity</h3>
              </div>

              <div className="space-y-6">
                <ActivityItem
                  icon={<History />}
                  title="Complaint Filed: Broken Streetlight"
                  time="Today, 10:30 AM"
                  status="In Progress"
                  statusColor="bg-yellow-50 text-yellow-600"
                />
                <ActivityItem
                  icon={<Search />}
                  title="Scheme Searched: PM Kisan Samman Nidhi"
                  time="Yesterday, 2:15 PM"
                  status="Completed"
                  statusColor="bg-green-50 text-green-600"
                />
                <ActivityItem
                  icon={<Scale />}
                  title="Legal Query: Property Registration"
                  time="Oct 12, 4:45 PM"
                  status="Answered"
                  statusColor="bg-blue-50 text-blue-600"
                />
              </div>
            </div>

            {/* Emergency Helplines */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <Phone className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold">Emergency Helplines</h3>
              </div>
              <div className="space-y-3">
                <HelplineRow icon={<Shield />} name="Police" number="100" />
                <HelplineRow
                  icon={<User />}
                  name="Women Helpline"
                  number="1091"
                />
                <HelplineRow
                  icon={<History />}
                  name="Senior Citizen"
                  number="14567"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- Sub-Components --- */

const ServiceCard = ({ icon, title, desc, actionText }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group cursor-pointer"
  >
    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-sm text-slate-500 mb-6">{desc}</p>
    <button className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
      {actionText} →
    </button>
  </motion.div>
);

const ActivityItem = ({ icon, title, time, status, statusColor }) => (
  <div className="flex gap-4">
    <div className="mt-1 w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
      {React.cloneElement(icon, { size: 18, className: "text-slate-400" })}
    </div>
    <div className="flex-1">
      <h5 className="text-sm font-bold leading-tight">{title}</h5>
      <p className="text-xs text-slate-400 mt-1">{time}</p>
      <span
        className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${statusColor}`}
      >
        {status}
      </span>
    </div>
  </div>
);

const HelplineRow = ({ icon, name, number }) => (
  <div className="flex items-center justify-between p-3 bg-red-50/50 rounded-xl hover:bg-red-50 transition-colors cursor-pointer group">
    <div className="flex items-center gap-3">
      <div className="text-red-500 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <span className="text-sm font-semibold text-slate-700">{name}</span>
    </div>
    <span className="text-red-600 font-bold">{number}</span>
  </div>
);

export default DashboardPage;
