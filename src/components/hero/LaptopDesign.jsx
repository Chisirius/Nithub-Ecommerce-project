export default function LaptopDesign() {
    return (
      <div className="flex flex-col items-center w-full max-w-sm mx-auto">
        {/* screen bezel */}
        <div
          className="w-full rounded-t-2xl p-2 shadow-2xl"
          style={{ background: "#1c1c1e", aspectRatio: "16/10" }}
        >
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1777065851469-71aef898a26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYWdyaWN1bHR1cmFsJTIwbWFya2V0JTIwZmFybWVycyUyMHByb2R1Y2V8ZW58MXx8fHwxNzgwODQ3MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Bustling agricultural marketplace with buyers and sellers"
              className="w-full h-full object-cover"
            />
  
            {/* top bar overlay */}
            <div
              className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-1.5"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
            >
              <span className="text-white font-bold" style={{ fontSize: 11 }}>🌿 FarmFresh</span>
              <span className="text-green-300" style={{ fontSize: 9 }}>marketplace.app</span>
            </div>
  
            {/* info badge bottom-left */}
            <div
              className="absolute bottom-3 left-3 rounded-xl px-3 py-2 shadow-xl"
              style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}
            >
              <p className="text-green-700 font-bold" style={{ fontSize: 12 }}>FarmFresh Market</p>
              <p className="text-gray-500" style={{ fontSize: 10 }}>Connecting farmers & buyers</p>
            </div>
  
            {/* live badge */}
            <div
              className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full px-2 py-1 shadow"
              style={{ background: "rgba(22,163,74,0.9)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
              <span className="text-white" style={{ fontSize: 8, fontWeight: 600 }}>LIVE</span>
            </div>
          </div>
        </div>
  
        {/* camera dot */}
        <div
          className="w-full flex justify-center py-1.5"
          style={{ background: "#1c1c1e" }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: "#3a3a3c" }} />
        </div>
  
        {/* hinge */}
        <div
          className="w-full h-2 rounded-b-sm shadow"
          style={{ background: "#2c2c2e" }}
        />
  
        {/* base */}
        <div
          className="rounded-b-xl shadow-lg"
          style={{ width: "110%", height: 10, background: "#3a3a3c" }}
        />
        <div
          className="rounded-b-xl"
          style={{ width: "85%", height: 4, background: "#2c2c2e" }}
        />
      </div>
    );
  }
  