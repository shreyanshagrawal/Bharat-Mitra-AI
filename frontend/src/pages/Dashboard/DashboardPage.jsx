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
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-1.5 rounded-lg shadow-sm">
            <Shield className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-orange-600 tracking-tight">
            Bharat Mitra AI
          </span>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Ask anything about government services"
              className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-orange-500/50 transition-all outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:bg-slate-100 px-3 py-1.5 rounded-full transition-colors">
            <Globe className="w-4 h-4" /> English
          </button>
          <div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center border border-slate-300 cursor-pointer hover:bg-slate-300 transition-colors">
            <User className="w-5 h-5 text-slate-600" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- Left Column: Hero & Quick Services --- */}
          <div className="lg:col-span-8 space-y-8">
            <header>
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
                Welcome to Bharat Mitra AI
              </h1>
              <p className="text-slate-500 font-medium">
                Your Personal Civic Assistant. How can we help you today?
              </p>
            </header>

            {/* AI Assistant Search Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a1b4d] rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-blue-900/20"
            >
              {/* Background Decoration */}
              <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2V8a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2z" />
                </svg>
              </div>

              <div className="flex items-center gap-2 mb-8 text-white">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                  <Mic className="w-5 h-5 text-blue-200" />
                </div>
                <span className="font-bold text-xl">Ask the AI Assistant</span>
              </div>

              <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-inner group">
                <button className="p-3 hover:bg-slate-50 rounded-xl transition-colors">
                  <Mic className="text-slate-400 w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type or speak your question here..."
                  className="flex-1 px-4 outline-none text-slate-700 text-lg font-medium placeholder:text-slate-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 p-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/40"
                >
                  <Send className="text-white w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Services Grid */}
            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                Quick Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<FileText />}
                  title="Find Government Schemes"
                  desc="Discover schemes you are eligible for instantly."
                  actionText="Check Eligibility"
                  link="/schemes"
                />
                <ServiceCard
                  icon={<AlertTriangle />}
                  title="Report Civic Issue"
                  desc="Report problems in your area like potholes."
                  actionText="Report Issue"
                  link="/dashboard/dashboard_report_issue"
                />
                <ServiceCard
                  icon={<Scale />}
                  title="Know Your Rights"
                  desc="Understand your legal rights in simple language."
                  actionText="Ask Legal AI"
                  link="/legal"
                />
              </div>
            </section>
          </div>

          {/* --- Right Column: Activity & Helplines --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recent Activity Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold text-slate-800">Recent Activity</h3>
                </div>
              </div>

              <div className="space-y-6">
                <ActivityItem
                  icon={<History />}
                  title="Complaint Filed: Broken Streetlight"
                  time="Today, 10:30 AM"
                  status="In Progress"
                  variant="warning"
                />
                <ActivityItem
                  icon={<Search />}
                  title="Scheme Searched: PM Kisan Samman Nidhi"
                  time="Yesterday, 2:15 PM"
                  status="Completed"
                  variant="success"
                />
                <ActivityItem
                  icon={<Scale />}
                  title="Legal Query: Property Registration"
                  time="Oct 12, 4:45 PM"
                  status="Answered"
                  variant="info"
                />
              </div>
            </div>

            {/* Emergency Helplines Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
              <div className="flex items-center gap-2 mb-6">
                <Phone className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-slate-800">
                  Emergency Helplines
                </h3>
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

/* --- Sub-Components with Enhanced Logic --- */

const ServiceCard = ({ icon, title, desc, actionText, link }) => (
  <motion.a
    href={link}
    whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group cursor-pointer"
  >
    <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed mb-6">{desc}</p>
    <span className="text-orange-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
      {actionText} <span className="text-lg">→</span>
    </span>
  </motion.a>
);

const ActivityItem = ({ icon, title, time, status, variant }) => {
  const styles = {
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    success: "bg-emerald-50 text-emerald-700 border-emerald-100",
    info: "bg-blue-50 text-blue-700 border-blue-100",
  };

  return (
    <div className="flex gap-4 group">
      <div className="mt-1 w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-white transition-colors">
        {React.cloneElement(icon, {
          size: 18,
          className:
            "text-slate-400 group-hover:text-orange-500 transition-colors",
        })}
      </div>
      <div className="flex-1">
        <h5 className="text-[14px] font-bold text-slate-800 leading-snug group-hover:text-orange-600 transition-colors cursor-pointer">
          {title}
        </h5>
        <p className="text-xs text-slate-400 font-medium mt-0.5">{time}</p>
        <span
          className={`inline-block mt-2 px-2.5 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider ${styles[variant]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

const HelplineRow = ({ icon, name, number }) => (
  <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-transparent rounded-xl hover:bg-red-50 hover:border-red-100 transition-all cursor-pointer group">
    <div className="flex items-center gap-3">
      <div className="text-slate-400 group-hover:text-red-500 transition-colors">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
        {name}
      </span>
    </div>
    <span className="text-slate-500 font-extrabold text-sm group-hover:text-red-600 transition-colors">
      {number}
    </span>
  </div>
);

export default DashboardPage;

