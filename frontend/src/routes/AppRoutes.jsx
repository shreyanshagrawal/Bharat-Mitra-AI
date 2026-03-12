import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Auth/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ReportIssuePage from "../pages/Dashboard_Extras/report_issue";
import SchemesPage from "../pages/Schemes/SchemesPage";
import LegalPage from "../pages/Legal/LegalPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<LandingPage />} />
        </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/legal" element={<LegalPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/dashboard_report_issue" element={<ReportIssuePage />} />

        
        </Routes>
    );
}
