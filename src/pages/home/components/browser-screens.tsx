function BrowserScreen({ type }: { type: string }) {
  if (type === "zechai")
    return (
      <div className="w-full h-full bg-[#0a0f1e] flex flex-col p-2.5 gap-1.5">
        <div className="flex items-center justify-between">
          <div className="text-[8px] font-mono text-[#2979FF]">ZECHAI</div>
          <div className="text-[7px] px-1.5 py-0.5 rounded" style={{ background: "rgba(41,121,255,0.2)", color: "#2979FF" }}>Live</div>
        </div>
        <div className="text-[10px] font-bold text-white">Spec Pipeline</div>
        <div className="flex gap-1">
          {["Intent", "Gaps", "Spec"].map((step, i) => (
            <div key={step} className="flex-1 rounded px-1 py-1 text-center" style={{ background: i < 2 ? "rgba(41,121,255,0.25)" : "#1A2030" }}>
              <div className="text-[7px]" style={{ color: i < 2 ? "#2979FF" : "#6B7A99" }}>{step}</div>
            </div>
          ))}
        </div>
        <div className="text-[7px] text-[#6B7A99] mt-0.5">RTM rows</div>
        {[
          { row: "Auth flow", status: "Spec ready", color: "#06d6a0" },
          { row: "Offline sync", status: "Filling gaps", color: "#2979FF" },
          { row: "Push alerts", status: "Queued", color: "#6B7A99" },
        ].map(({ row, status, color }) => (
          <div key={row} className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1">
            <div className="text-[7px] text-white">{row}</div>
            <div className="text-[7px] font-semibold" style={{ color }}>{status}</div>
          </div>
        ))}
      </div>
    );

  if (type === "flairhaven")
    return (
      <div className="w-full h-full bg-[#0a0618] flex flex-col p-2.5 gap-1.5">
        <div className="text-[8px] font-mono text-[#7C3AED]">FLAIRHAVEN</div>
        <div className="text-[10px] font-bold text-white">Digital Marketplace</div>
        <div className="grid grid-cols-3 gap-1 mt-0.5">
          {["#7C3AED", "#f72585", "#2979FF", "#06d6a0", "#E8A017", "#7C3AED"].map((c, i) => (
            <div key={i} className="aspect-square rounded" style={{ background: `${c}44`, border: `1px solid ${c}66` }} />
          ))}
        </div>
        <div className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1 mt-0.5">
          <div className="text-[7px] text-white">Neon Drift #12</div>
          <div className="text-[7px] font-semibold text-[#7C3AED]">$48</div>
        </div>
        <div className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1">
          <div className="text-[7px] text-white">Glass Orbit</div>
          <div className="text-[7px] font-semibold text-[#7C3AED]">$32</div>
        </div>
      </div>
    );

  if (type === "pos")
    return (
      <div className="w-full h-full bg-[#061210] flex flex-col p-2.5 gap-1.5">
        <div className="text-[8px] font-mono text-[#06d6a0]">POS SYSTEM</div>
        <div className="text-[10px] font-bold text-white">Today's Sales</div>
        <div className="text-[16px] font-bold text-white">$2,480.00</div>
        <div className="grid grid-cols-2 gap-1">
          {[["Orders", "34"], ["Items", "89"]].map(([l, v]) => (
            <div key={l} className="bg-[#1A2030] rounded p-1.5">
              <div className="text-[7px] text-[#6B7A99]">{l}</div>
              <div className="text-[10px] font-bold text-white">{v}</div>
            </div>
          ))}
        </div>
        <div className="text-[7px] text-[#6B7A99]">Recent</div>
        {[
          { item: "Coffee Blend", amt: "$12.50" },
          { item: "Tee — Black M", amt: "$28.00" },
          { item: "Gift Card", amt: "$50.00" },
        ].map(({ item, amt }) => (
          <div key={item} className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1">
            <div className="text-[7px] text-white">{item}</div>
            <div className="text-[7px] font-semibold text-[#06d6a0]">{amt}</div>
          </div>
        ))}
      </div>
    );

  if (type === "pokedex")
    return (
      <div className="w-full h-full bg-[#0e0a12] flex flex-col p-2.5 gap-1.5">
        <div className="text-[8px] font-mono text-[#f72585]">POKEDEX</div>
        <div className="text-[10px] font-bold text-white">Gen 1 · 151</div>
        <div className="bg-[#1A2030] rounded px-2 py-1 text-[7px] text-[#6B7A99]">Search Pokémon...</div>
        {[
          { num: "#001", name: "Bulbasaur", type: "Grass", color: "#06d6a0" },
          { num: "#004", name: "Charmander", type: "Fire", color: "#f72585" },
          { num: "#007", name: "Squirtle", type: "Water", color: "#2979FF" },
          { num: "#025", name: "Pikachu", type: "Electric", color: "#E8A017" },
        ].map(({ num, name, type, color }) => (
          <div key={num} className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1">
            <div className="flex items-center gap-1.5">
              <div className="text-[7px] text-[#6B7A99]">{num}</div>
              <div className="text-[7px] text-white">{name}</div>
            </div>
            <div className="text-[7px] font-semibold" style={{ color }}>{type}</div>
          </div>
        ))}
      </div>
    );

  return null;
}

export default BrowserScreen;
