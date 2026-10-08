import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Smartphone, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

export const HeroDeviceMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ui' | 'bloc' | 'network'>('ui');

  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none">
      {/* Ambient Glow behind the mockup */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-cyan-500/10 to-indigo-500/20 rounded-[50px] blur-2xl -z-10" />

      {/* Floating Badge 1: Flutter & Dart (Top Right) */}
      <div className="absolute -top-4 -right-4 md:-right-6 z-20 bg-slate-900/90 border border-sky-500/30 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl shadow-black/40 flex items-center gap-2.5 animate-bounce-subtle">
        <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
        <div className="flex flex-col">
          <span className="font-code text-[11px] font-bold text-sky-300">Flutter &amp; Dart</span>
          <span className="text-[10px] text-slate-400">Core Specialization</span>
        </div>
      </div>

      {/* Floating Badge 2: BLoC / State (Bottom Left) */}
      <div className="absolute -bottom-6 -left-4 md:-left-6 z-20 bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl shadow-black/40 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <div className="flex flex-col">
          <span className="font-code text-[11px] font-bold text-emerald-300">BLoC • Clean Arch</span>
          <span className="text-[10px] text-slate-400">State Management</span>
        </div>
      </div>

      {/* Floating Badge 3: Android Expanding (Bottom Right) */}
      <div className="hidden sm:flex absolute -bottom-4 -right-5 z-20 bg-slate-900/90 border border-violet-500/30 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl shadow-black/40 items-center gap-2">
        <span className="text-[10px] font-code text-violet-300 font-medium">
          Kotlin &amp; Compose ↗
        </span>
      </div>

      {/* Main Smartphone Shell */}
      <div className="relative rounded-[42px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-white/[0.15] shadow-2xl shadow-black/80">
        {/* Inner Phone Screen */}
        <div className="relative rounded-[32px] overflow-hidden bg-slate-950 border border-slate-800/80 flex flex-col h-[540px]">
          {/* Top Status Bar & Dynamic Island */}
          <div className="pt-3 px-6 pb-2 flex items-center justify-between text-slate-400 text-xs">
            <span className="font-code text-[11px] font-semibold text-slate-200">09:41</span>
            
            {/* Dynamic Island Pill */}
            <div className="w-24 h-4.5 bg-black rounded-full border border-slate-800/80 flex items-center justify-center px-2 gap-1.5 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-sky-500/80 animate-pulse" />
              <span className="text-[9px] font-code text-slate-400">Flutter 3.x</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <Wifi className="w-3 h-3 text-slate-300" />
              <Battery className="w-3.5 h-3.5 text-slate-300" />
            </div>
          </div>

          {/* Interactive Screen Navigation Mode */}
          <div className="px-4 pt-2 pb-2">
            <div className="flex p-1 bg-slate-900/90 rounded-xl border border-white/[0.06] text-[11px] font-code">
              <button
                type="button"
                onClick={() => setActiveTab('ui')}
                className={`flex-1 py-1 rounded-lg text-center transition-all cursor-pointer ${
                  activeTab === 'ui'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                App UI
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('bloc')}
                className={`flex-1 py-1 rounded-lg text-center transition-all cursor-pointer ${
                  activeTab === 'bloc'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                BLoC Tree
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('network')}
                className={`flex-1 py-1 rounded-lg text-center transition-all cursor-pointer ${
                  activeTab === 'network'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Dio Net
              </button>
            </div>
          </div>

          {/* Screen Content Based on Active Mode */}
          <div className="flex-1 px-4 py-2 overflow-y-auto space-y-3 font-sans text-xs">
            {activeTab === 'ui' && (
              <div className="space-y-3">
                {/* Simulated Mobile App Header */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-sky-950/40 to-slate-900/70 border border-sky-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-code uppercase text-sky-400 tracking-wider font-semibold">
                      Inventory &amp; Dispense
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Synchronized
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">RX-Medecia Core</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Active Ingredient: Amoxicillin + Clavulanic
                  </p>
                </div>

                {/* Stock Metric Cards */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.05]">
                    <span className="text-[10px] text-slate-400">Stock Balance</span>
                    <p className="text-base font-bold text-slate-100 font-code mt-0.5">342 Units</p>
                    <span className="text-[9px] text-emerald-400">Verified Cache</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.05]">
                    <span className="text-[10px] text-slate-400">Active RX</span>
                    <p className="text-base font-bold text-sky-300 font-code mt-0.5">18 Pending</p>
                    <span className="text-[9px] text-sky-400">BLoC Stream</span>
                  </div>
                </div>

                {/* Quick Action Widget */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300 font-medium">Dispense Validation</span>
                    <span className="font-code text-sky-400 text-[10px]">Auto-Checked</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-sky-400 h-full w-4/5 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Interaction: Safe</span>
                    <span>Dosage: 1000mg</span>
                  </div>
                </div>

                {/* Android TV & Cravio Preview Tag */}
                <div className="p-2.5 rounded-xl bg-slate-900/40 border border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-[11px] text-slate-300">TV Signage &amp; Ordering</span>
                  </div>
                  <span className="text-[10px] font-code text-slate-400">Cross-Platform</span>
                </div>
              </div>
            )}

            {activeTab === 'bloc' && (
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 font-code text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-emerald-400 font-semibold">
                    <span>// BLoC State Flow</span>
                    <span>Stream: Active</span>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-purple-400">class</span> InventoryBloc{' '}
                    <span className="text-purple-400">extends</span> Bloc&lt;InventoryEvent, InventoryState&gt;
                  </div>
                  <div className="text-slate-400 text-[10px] pl-2 border-l border-emerald-500/30 space-y-1 mt-1">
                    <p className="text-sky-300">&gt; on&lt;FetchDispenseList&gt;()</p>
                    <p className="text-emerald-300">&gt; emit(InventoryLoadedState)</p>
                    <p className="text-amber-300">&gt; on&lt;StockQuantityChanged&gt;()</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-1.5">
                  <span className="text-[10px] font-code text-slate-400">State Transition Log</span>
                  <div className="text-[10px] font-code text-slate-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>State::Initial → Loading → Success</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.05]">
                  <p className="text-[10px] text-slate-400">
                    Predictable, unidirectional reactive event pipeline ensuring zero UI desync.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'network' && (
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-sky-500/20 font-code text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-sky-400 font-semibold">Dio HTTP Client</span>
                    <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      200 OK
                    </span>
                  </div>
                  <p className="text-slate-300 text-[10px]">
                    GET /api/v1/prescriptions/active
                  </p>
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-[10px] text-slate-400 font-code">
                    <code>
                      {`{\n  "status": "success",\n  "count": 48,\n  "cached": true,\n  "cacheEngine": "SharedPreferences"\n}`}
                    </code>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.05] space-y-1">
                  <span className="text-[10px] font-code text-slate-400">Interceptor Pipeline</span>
                  <p className="text-[10px] text-slate-300">
                    Auth Token Injection • Error Handler • Offline Fallback
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Simulated Bottom Home Indicator */}
          <div className="pb-3 pt-2 flex justify-center">
            <div className="w-28 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
