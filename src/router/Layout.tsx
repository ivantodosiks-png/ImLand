import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import BackgroundFX from "../components/BackgroundFX";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Footer from "../shared/Footer";

export default function Layout() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const reduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, [location.pathname, reduced]);

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <CustomCursor />
      <LoadingScreen done={loaded} />

      <AnimatePresence mode="wait">
        {loaded && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[2]"
          >
            <Navbar />
            <main className="pt-24">
              <Outlet />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

