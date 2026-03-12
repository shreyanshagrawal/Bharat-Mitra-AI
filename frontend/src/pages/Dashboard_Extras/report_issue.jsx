import React, { useState, useRef } from "react";
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
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReportIssuePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [issueType, setIssueType] = useState("");
  const [customIssue, setCustomIssue] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload photo evidence before submitting.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 pb-20">
      <nav className="flex justify-between items-center px-8 py-3 bg-white border-b border-gray-200 sticky top-0 z-30">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              All fields are mandatory to ensure quick resolution.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Issue Type with Custom Option */}
            <div className="space-y-2">
              <label className="block font-bold text-slate-700">
                Issue Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  required
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-200 rounded-lg appearance-none focus:ring-2 focus:ring-orange-500 outline-none text-slate-700"
                              >
                <option value="">Select the type of problem</option>
                
                <option value="other">Other (Write your own)</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-3.5 text-slate-400 pointer-events-none"
                  size={18}
                />
              </div>

              <AnimatePresence>
                {issueType === "other" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-2"
                  >
                    <input
                      required
                      type="text"
                      placeholder="Specify your issue..."
                      value={customIssue}
                      onChange={(e) => setCustomIssue(e.target.value)}
                      className="w-full p-3 border border-orange-200 bg-orange-50/30 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block font-bold text-slate-700">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <input
                  required
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
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows="4"
                placeholder="Describe the problem in detail..."
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full py-3 bg-[#eef2f6] text-[#475569] font-bold rounded-lg border border-[#cbd5e1] flex items-center justify-center gap-2 hover:bg-slate-200 transition"
            >
              <Sparkles size={18} className="text-blue-500" />
              Generate Complaint Draft with AI
            </button>

            {/* Upload Photo (Compulsory) */}
            <div className="space-y-2 pt-2">
              <label className="block font-bold text-slate-700 text-sm uppercase tracking-wide">
                Upload Photo Evidence <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />

              <div
                onClick={() => fileInputRef.current.click()}
                className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all
                  ${file ? "border-green-400 bg-green-50" : "border-slate-200 bg-[#eef2f6]/50 hover:bg-blue-50/50"}
                `}
              >
                {!file ? (
                  <>
                    <div className="p-4 bg-white rounded-full shadow-sm text-slate-400">
                      <Camera size={32} />
                    </div>
                    <p className="font-bold text-slate-700">
                      Click to upload photo
                    </p>
                    <p className="text-xs text-slate-400">JPG, PNG up to 5MB</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="text-green-500 mb-2" size={40} />
                    <p className="font-bold text-green-700">Photo Selected</p>
                    <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-white rounded-full border border-green-200 shadow-sm">
                      <span className="text-xs text-green-600 truncate max-w-[150px]">
                        {file.name}
                      </span>
                      <X
                        size={14}
                        className="text-red-400 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#f27a32] text-white font-bold rounded-xl shadow-lg hover:bg-[#e66d25] active:scale-[0.98] transition-all disabled:opacity-70"
            >
              {loading ? "Processing..." : "Submit Complaint"}
            </button>
          </form>
        </motion.div>

        {/* --- Sidebar (Success State) --- */}
        <div className="lg:col-span-5 flex justify-center sticky top-24">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white rounded-xl shadow-sm border border-green-100 p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Complaint Submitted
                </h3>
                <p className="text-slate-500 text-sm mb-8">
                  Your issue has been successfully registered.
                </p>

                <div className="space-y-4 text-sm mb-8 border-t border-b border-slate-50 py-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Complaint ID</span>
                    <span className="font-bold text-slate-700">
                      #BM-2023-8942
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Category</span>
                    <span className="font-bold text-slate-700">
                      {issueType === "other" ? customIssue : issueType}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 bg-[#243477] text-white font-bold rounded-lg flex items-center justify-center gap-2">
                    <Map size={18} /> Track Complaint
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full py-3 text-slate-600 font-bold border border-slate-200 rounded-lg"
                  >
                    Return to Dashboard
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="w-full max-w-md bg-slate-50 rounded-xl border border-dashed border-slate-200 h-[500px] flex items-center justify-center">
                <p className="text-slate-400 text-sm italic">
                  Ready to submit...
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default ReportIssuePage;
