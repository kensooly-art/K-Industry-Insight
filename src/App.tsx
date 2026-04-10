/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Header, Footer } from "./components/Layout";
import { Home } from "./pages/Home";
import { TourPrograms } from "./pages/TourPrograms";
import { Apply } from "./pages/Apply";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-[#1A1A1B] text-white flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tours" element={<TourPrograms />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
