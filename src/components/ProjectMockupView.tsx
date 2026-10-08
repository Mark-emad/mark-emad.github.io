import React from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { 
  Tv, 
  Printer, 
  Pill
} from 'lucide-react';

interface ProjectMockupViewProps {
  project: ProjectItem;
}

export const ProjectMockupView: React.FC<ProjectMockupViewProps> = ({ project }) => {
  if (project.deviceType === 'tv') {
    // Android TV 16:9 Mockup for Diggitsy
    return (
      <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8">
        {/* TV Outer Bezel */}
        <div className="w-full max-w-[540px] aspect-video bg-slate-900 border-[6px] border-slate-700/80 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between group-hover:border-sky-500/40 transition-colors">
          {/* TV Top Header Bar */}
          <div className="px-4 py-2.5 bg-slate-950/80 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-sky-400" />
              <span className="text-[11px] font-code text-slate-200 font-semibold tracking-wide">
                Android TV • Diggitsy OS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-code text-emerald-400">Cloud Linked</span>
            </div>
          </div>

          {/* TV Screen Display Mock Content */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/30">
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-8 space-y-2 text-left">
                <span className="text-[10px] font-code text-sky-400 uppercase tracking-widest bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/20">
                  Device ID #TV-8842
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-100">
                  Dynamic Signage Display Loop
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  Cloud synchronized playlist • Offline fallback active • D-Pad remote enabled
                </p>
              </div>

              {/* Pairing / QR Code Placeholder Widget */}
              <div className="col-span-4 bg-slate-950 p-2.5 rounded-xl border border-white/[0.08] text-center">
                <div className="aspect-square bg-slate-900 rounded-lg flex flex-col items-center justify-center border border-dashed border-sky-500/30">
                  <span className="text-[10px] font-code text-sky-300 font-bold">DIGGITSY</span>
                  <span className="text-[9px] text-slate-400">TV-PAIR</span>
                </div>
                <span className="text-[9px] font-code text-slate-400 mt-1 block">diggitsy.com</span>
              </div>
            </div>

            {/* Bottom Schedule Ribbon */}
            <div className="p-2 rounded-lg bg-slate-950/60 border border-white/[0.05] flex items-center justify-between text-[10px] font-code text-slate-400">
              <span>Next Schedule: 12:00 Promo Reel</span>
              <span className="text-sky-400">Dio Engine • Auto-Replay</span>
            </div>
          </div>

          {/* TV Bottom Stand Connector */}
          <div className="h-1 bg-slate-800" />
        </div>

        {/* TV Stand Base */}
        <div className="w-24 h-2 bg-slate-700/80 rounded-b-md shadow-md" />
        <div className="w-40 h-1 bg-slate-800/60 rounded-full mt-0.5" />

        {/* Screenshot replacement notice */}
        <div className="mt-3 text-center">
          <p className="text-[11px] font-code text-slate-500">
            [ TV UI Simulation • Replace with actual Diggitsy TV screenshots ]
          </p>
        </div>
      </div>
    );
  }

  if (project.deviceType === 'dual-phone') {
    // Cravio.ai Dual Phone Mockup (Customer App + Restaurant App)
    return (
      <div className="w-full flex flex-col items-center justify-center p-4">
        <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-[500px]">
          {/* Phone 1: Customer App */}
          <div className="flex-1 max-w-[210px] bg-slate-900 border-[4px] border-slate-700/80 rounded-[30px] p-2 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform">
            <div className="rounded-[22px] bg-slate-950 p-3 flex flex-col h-[280px] sm:h-[310px] justify-between border border-white/[0.06] text-left">
              <div>
                <div className="flex items-center justify-between text-[9px] font-code text-slate-400 pb-2 border-b border-white/[0.05]">
                  <span>Cravio Customer</span>
                  <span className="text-sky-400">09:41</span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="p-2 rounded-xl bg-sky-950/30 border border-sky-500/20">
                    <span className="text-[9px] font-code text-sky-400 uppercase">Live Cart</span>
                    <p className="text-xs font-bold text-slate-100">Order #CR-942</p>
                    <p className="text-[10px] text-slate-400">Total: $38.50 • 3 Items</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-white/[0.04] text-[10px] text-slate-300">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-semibold">Kitchen Accepted</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-sky-500/10 text-center border border-sky-500/20">
                <span className="text-[10px] font-code text-sky-300 font-semibold">
                  Customer UI Redesign
                </span>
              </div>
            </div>
          </div>

          {/* Phone 2: Restaurant App + Thermal Receipt Feature */}
          <div className="flex-1 max-w-[210px] bg-slate-900 border-[4px] border-slate-700/80 rounded-[30px] p-2 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform">
            <div className="rounded-[22px] bg-slate-950 p-3 flex flex-col h-[280px] sm:h-[310px] justify-between border border-white/[0.06] text-left">
              <div>
                <div className="flex items-center justify-between text-[9px] font-code text-slate-400 pb-2 border-b border-white/[0.05]">
                  <span>Restaurant Kitchen</span>
                  <Printer className="w-3 h-3 text-amber-400" />
                </div>
                {/* Simulated Thermal Ticket printing out */}
                <div className="mt-2 p-2 rounded-lg bg-amber-950/20 border border-amber-500/30 font-code text-[9px] space-y-1">
                  <div className="flex items-center gap-1 text-amber-300 font-semibold">
                    <Printer className="w-3 h-3" />
                    <span>AUTO THERMAL PRINT</span>
                  </div>
                  <p className="text-slate-300 border-t border-amber-500/20 pt-1">
                    Receipt #942 Printed
                  </p>
                  <p className="text-[8px] text-slate-400">
                    Triggered via background listener
                  </p>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-emerald-500/10 text-center border border-emerald-500/20">
                <span className="text-[10px] font-code text-emerald-300 font-semibold">
                  Background Automation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Replacement Note */}
        <div className="mt-3 text-center">
          <p className="text-[11px] font-code text-slate-500">
            [ Dual-App Simulation • Replace with actual Cravio.ai screenshots ]
          </p>
        </div>
      </div>
    );
  }

  // Single Phone Mockup for RX-Medecia (Smart Pharmacy)
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[280px] bg-slate-900 border-[5px] border-slate-700/80 rounded-[36px] p-2.5 shadow-2xl relative overflow-hidden group-hover:border-sky-500/40 transition-colors">
        <div className="rounded-[26px] bg-slate-950 p-3.5 flex flex-col h-[340px] justify-between border border-white/[0.06] text-left">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between text-[10px] font-code text-slate-400 pb-2 border-b border-white/[0.05]">
              <span className="font-semibold text-slate-200">RX-Medecia</span>
              <span className="text-sky-400">BLoC State</span>
            </div>

            {/* Inventory Content */}
            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-xl bg-sky-950/30 border border-sky-500/20">
                <div className="flex items-center gap-1.5 text-sky-400 text-[10px] font-code">
                  <Pill className="w-3.5 h-3.5" />
                  <span>ACTIVE INGREDIENT SEARCH</span>
                </div>
                <p className="text-xs font-bold text-slate-100 mt-1">Paracetamol 500mg</p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>Cross-linked generic: 14</span>
                  <span className="text-emerald-400">In Stock</span>
                </div>
              </div>

              {/* Prescription Dispatching Box */}
              <div className="p-2 rounded-lg bg-slate-900/80 border border-white/[0.05] text-[10px] space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>Prescription #701</span>
                  <span className="text-sky-300 font-code">Verified RX</span>
                </div>
                <p className="text-[9px] text-slate-400">
                  Dispensed with patient history linkage &amp; cache verification.
                </p>
              </div>
            </div>
          </div>

          {/* Footer badge */}
          <div className="p-2 rounded-xl bg-slate-900 text-center border border-white/[0.06]">
            <span className="text-[10px] font-code text-sky-400">
              SharedPreferences Offline Cache
            </span>
          </div>
        </div>
      </div>

      {/* Replacement banner */}
      <div className="mt-3 text-center">
        <p className="text-[11px] font-code text-slate-500">
          [ Pharmacy UI Simulation • Replace with actual RX-Medecia screenshots ]
        </p>
      </div>
    </div>
  );
};
