import React, { useState } from "react";
import {
  ChevronLeft,
  User,
  AlertTriangle,
  MapPin,
  Sparkles,
  Camera,
  CheckCircle2,
  Map,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReportIssuePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      {/* --- Top Navigation --- */}
      <nav className="flex justify-between items-center px-8 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <ChevronLeft size={16} />
          <span>Dashboard</span>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-slate-800">Report Issue</span>
        </div>
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 border border-slate-200 shadow-sm cursor-pointer">
          <User size={20} />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* --- Left Column: The Form --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 bg-white rounded-xl shadow-sm border border-slate-200 p-8"
        >
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-50 rounded-lg">
                <AlertTriangle className="text-orange-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1e293b]">
                Report a Civic Issue
              </h2>
            </div>
            <p className="text-slate-500">
              Fill out the details below or use our AI to help draft your
              complaint.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Issue Type */}
            <div className="space-y-2">
              <label className="block font-bold text-slate-700">
                Issue Type
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-white border border-slate-200 rounded-lg appearance-none focus:ring-2 focus:ring-orange-500 outline-none text-slate-600">
                  <option>Select the type of problem</option>
                  <option>Potholes</option>
                  <option>Street Light Outage</option>
                  <option>Garbage Collection</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-3.5 text-slate-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block font-bold text-slate-700">Location</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter street name or landmark"
                  className="flex-1 p-3 border border-slate-200 rounded-l-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 bg-slate-50 border border-l-0 border-slate-200 rounded-r-lg text-slate-600 hover:bg-slate-100 transition"
                >
                  <MapPin size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">Auto-detect</span>
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block font-bold text-slate-700">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Describe the problem in detail..."
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none"
              ></textarea>
            </div>

            {/* AI Action */}
            <button
              type="button"
              className="w-full py-3 bg-[#eef2f6] text-[#475569] font-bold rounded-lg border border-[#cbd5e1] flex items-center justify-center gap-2 hover:bg-slate-200 transition group"
            >
              <Sparkles
                size={18}
                className="text-blue-500 group-hover:rotate-12 transition-transform"
              />
              Generate Complaint Draft with AI
            </button>

            {/* Upload Section */}
            <div className="space-y-2 pt-2">
              <label className="block font-bold text-slate-700 text-sm uppercase tracking-wide">
                Upload Photo Evidence
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl bg-[#eef2f6]/50 p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-blue-50/50 transition border-spacing-4">
                <div className="p-4 bg-white rounded-full shadow-sm text-slate-400">
                  <Camera size={32} />
                </div>
                <p className="font-bold text-slate-700">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-slate-400">JPG, PNG up to 5MB</p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#f27a32] text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:bg-[#e66d25] active:scale-[0.98] transition-all disabled:opacity-70"
            >
              {loading ? "Processing..." : "Submit Complaint"}
            </button>
          </form>
        </motion.div>

        {/* --- Right Column: Success Card --- */}
        <div className="lg:col-span-5 flex justify-center">
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                className="w-full max-w-md bg-white rounded-xl shadow-sm border border-green-100 p-8 text-center relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-green-400"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Complaint Submitted
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Your issue has been successfully registered with the local
                  authorities.
                </p>

                <div className="space-y-4 text-sm mb-8 border-t border-b border-slate-50 py-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Complaint ID</span>
                    <span className="font-bold text-slate-700">
                      #BM-2023-8942
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-slate-400">Assigned Dept.</span>
                    <span className="font-bold text-slate-700 text-right">
                      Municipal Corporation <br />
                      <span className="text-xs font-medium opacity-70">
                        (Public Works)
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-50 pt-4">
                    <span className="text-slate-400">Est. Resolution</span>
                    <span className="font-bold text-slate-700">
                      48 - 72 Hours
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 bg-[#243477] text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#1a265a] transition shadow-md">
                    <Map size={18} />
                    Track Complaint
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full py-3 bg-white text-slate-600 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition"
                  >
                    Return to Dashboard
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!submitted && (
            <div className="hidden lg:block w-full max-w-md bg-slate-50 rounded-xl border border-dashed border-slate-200 h-[600px] flex items-center justify-center">
              <p className="text-slate-400 text-sm">
                Complaint preview will appear here
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ReportIssuePage;
