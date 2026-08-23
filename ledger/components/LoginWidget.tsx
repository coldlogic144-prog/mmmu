"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { BRANCHES } from "@/lib/data";

/**
 * LoginWidget — the modern glass auth card.
 *
 * Fields: Branch, Section, Hostel/Day-Scholar. On submit it shows a brief
 * "authenticating" shimmer then navigates to the dashboard. Static demo, but
 * the shape matches a real auth flow and is easy to swap for Firebase/DB.
 */
export default function LoginWidget() {
  const [branch, setBranch] = useState(BRANCHES[1].id);
  const [section, setSection] = useState("A");
  const [hostel, setHostel] = useState("Day Scholar");
  const [loading, setLoading] = useState(false);

  const current = BRANCHES.find((b) => b.id === branch) ?? BRANCHES[0];

  const submit = () => {
    setLoading(true);
    // Small artificial delay so the motion state is visible, then open the
    // dashboard (kept as a push to avoid building a router dependency here).
    setTimeout(() => {
      window.location.assign("/dashboard");
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-lg"
    >
      <div className="mb-5 flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet text-white shadow-glow">
          <GraduationCap className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">The Ledger</p>
          <p className="text-xs text-stone-400">Sign in to continue</p>
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-[11px] uppercase tracking-wide text-stone-400">
          Branch
          <select
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
              const b = BRANCHES.find((x) => x.id === e.target.value);
              setSection(b?.sections[0] ?? "A");
            }}
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-stone-200 outline-none"
          >
            {BRANCHES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="block text-[11px] tracking-wide text-stone-400">Section</span>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-stone-200 outline-none"
            >
              {current.sections.map((s) => (
                <option key={s} value={s}>
                  Section {s}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="block text-[11px] tracking-wide text-stone-400">Hostel</span>
            <select
              value={hostel}
              onChange={(e) => setHostel(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-stone-200 outline-none"
            >
              <option>Day Scholar</option>
              <option>Tagore Hostel</option>
              <option>VS Hostel</option>
            </select>
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={submit}
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-pinksoft px-4 py-3 text-sm font-semibold text-white shadow-glow transition disabled:cursor-not-allowed"
        >
          {loading ? (
            <Sparkles className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Enter Dashboard
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </motion.button>

        <p className="mt-4 text-center text-[11px] text-stone-500">
          Web build for the odd semester · led by a student tech team
        </p>
      </div>
    </motion.div>
  );
}