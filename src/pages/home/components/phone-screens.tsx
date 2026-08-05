import { ArrowRight } from "lucide-react";

function PhoneScreen({ type }: { type: string }) {
  if (type === "bills")
    return (
      <div className="w-full h-full bg-[#0a0f1e] flex flex-col p-3 gap-2">
        <div className="text-[9px] font-mono text-[#2979FF]">BILLWISE</div>
        <div className="text-[11px] text-[#6B7A99]">Due this month</div>
        <div className="text-[18px] font-bold text-white">$1,284.40</div>
        <div className="grid grid-cols-2 gap-1 mt-1">
          {[["Paid", "3"], ["Upcoming", "2"]].map(([l, v]) => (
            <div key={l} className="bg-[#1A2030] rounded p-1.5">
              <div className="text-[7px] text-[#6B7A99]">{l}</div>
              <div className="text-[11px] font-bold text-white">{v}</div>
            </div>
          ))}
        </div>
        <div className="text-[8px] text-[#6B7A99] mt-1">Bills</div>
        {[["Rent", "$950", "Due 5th", "#f72585"], ["Electric", "$84.40", "Paid", "#06d6a0"]].map(([name, amt, status, c]) => (
          <div key={name} className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1.5">
            <div>
              <div className="text-[8px] text-white">{name}</div>
              <div className="text-[7px]" style={{ color: c }}>{status}</div>
            </div>
            <div className="text-[8px] font-semibold text-white">{amt}</div>
          </div>
        ))}
        <div className="mt-auto flex items-center gap-1 bg-[#2979FF] rounded-lg px-2 py-1.5">
          <div className="text-[9px] text-white font-semibold">Pay All Due</div>
          <ArrowRight size={8} className="text-white ml-auto" />
        </div>
      </div>
    );

  if (type === "storage")
    return (
      <div className="w-full h-full bg-[#0a0618] flex flex-col p-3 gap-2">
        <div className="text-[9px] font-mono text-[#7C3AED]">TMEDIA</div>
        <div className="text-[11px] text-[#6B7A99]">Storage used</div>
        <div className="text-[18px] font-bold text-white">48.2 GB</div>
        <div className="h-1.5 rounded-full bg-[#1A2030] overflow-hidden mt-0.5">
          <div className="h-full rounded-full bg-[#7C3AED]" style={{ width: "64%" }} />
        </div>
        <div className="text-[7px] text-[#6B7A99]">64% of 75 GB</div>
        <div className="flex gap-1 mt-1">
          {["Photos", "Videos", "Files"].map((t) => (
            <div key={t} className="flex-1 text-center bg-[#1A2030] rounded py-1.5 text-[8px] text-[#E8EDF5]">{t}</div>
          ))}
        </div>
        <div className="text-[8px] text-[#6B7A99] mt-1">Recent</div>
        {[["Trip_2024", "2.4 GB", "#7C3AED"], ["Resume.pdf", "1.2 MB", "#06d6a0"]].map(([name, size, c]) => (
          <div key={name} className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1.5">
            <div className="text-[8px] text-white">{name}</div>
            <div className="text-[8px] font-semibold" style={{ color: c }}>{size}</div>
          </div>
        ))}
      </div>
    );

  if (type === "messaging")
    return (
      <div className="w-full h-full bg-[#0e0a12] flex flex-col p-3 gap-2">
        <div className="text-[9px] font-mono text-[#f72585]">TMESSAGER</div>
        <div className="text-[11px] font-bold text-white">Messages</div>
        <div className="text-[8px] text-[#6B7A99]">3 unread</div>
        {[
          { name: "Alex Chen", preview: "See you at 6?", time: "2m", unread: true },
          { name: "Design Team", preview: "Mockups look good", time: "18m", unread: true },
          { name: "Sam Rivera", preview: "Thanks for the help!", time: "1h", unread: false },
        ].map(({ name, preview, time, unread }) => (
          <div key={name} className="flex items-center gap-2 bg-[#1A2030] rounded px-2 py-1.5">
            <div className="w-5 h-5 rounded-full shrink-0" style={{ background: unread ? "#f72585" : "#6B7A99" }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <div className={`text-[8px] truncate ${unread ? "text-white font-semibold" : "text-[#E8EDF5]"}`}>{name}</div>
                <div className="text-[7px] text-[#6B7A99] shrink-0">{time}</div>
              </div>
              <div className={`text-[7px] truncate ${unread ? "text-[#E8EDF5]" : "text-[#6B7A99]"}`}>{preview}</div>
            </div>
          </div>
        ))}
        <div className="mt-auto flex items-center gap-1 bg-[#1A2030] rounded-lg px-2 py-1.5 border border-[#f72585]/44">
          <div className="text-[8px] text-[#6B7A99] flex-1">New message...</div>
          <div className="text-[8px] font-semibold text-[#f72585]">Send</div>
        </div>
      </div>
    );

  if (type === "grades")
    return (
      <div className="w-full h-full bg-[#061210] flex flex-col p-3 gap-2">
        <div className="text-[9px] font-mono text-[#06d6a0]">GRAEDE-VIEWER</div>
        <div className="text-[11px] text-[#6B7A99]">Semester GPA</div>
        <div className="text-[18px] font-bold text-white">3.72</div>
        <div className="flex gap-1 mt-1">
          {[["Credits", "15"], ["Avg", "A-"]].map(([l, v]) => (
            <div key={l} className="flex-1 bg-[#1A2030] rounded p-1.5">
              <div className="text-[7px] text-[#6B7A99]">{l}</div>
              <div className="text-[11px] font-bold text-white">{v}</div>
            </div>
          ))}
        </div>
        <div className="text-[8px] text-[#6B7A99] mt-1">Courses</div>
        {[
          { name: "Algorithms", grade: "A", color: "#06d6a0" },
          { name: "Linear Algebra", grade: "B+", color: "#2979FF" },
          { name: "Writing 201", grade: "A-", color: "#06d6a0" },
        ].map(({ name, grade, color }) => (
          <div key={name} className="flex items-center justify-between bg-[#1A2030] rounded px-2 py-1.5">
            <div className="text-[8px] text-white">{name}</div>
            <div className="text-[8px] font-semibold" style={{ color }}>{grade}</div>
          </div>
        ))}
      </div>
    );

  if (type === "notes")
    return (
      <div className="w-full h-full bg-[#0c0a08] flex flex-col p-3 gap-2">
        <div className="text-[9px] font-mono text-[#E8A017]">ICC-NOTES</div>
        <div className="text-[11px] font-bold text-white">My Notes</div>
        <div className="flex gap-1 mt-1">
          {[["Classes", "4"], ["Notes", "28"]].map(([l, v]) => (
            <div key={l} className="flex-1 bg-[#1A2030] rounded p-1.5">
              <div className="text-[7px] text-[#6B7A99]">{l}</div>
              <div className="text-[11px] font-bold text-white">{v}</div>
            </div>
          ))}
        </div>
        <div className="text-[8px] text-[#6B7A99] mt-1">Recent</div>
        {[
          { title: "CS 201 — Recursion", course: "Algorithms", time: "Today" },
          { title: "Midterm Review", course: "Calc II", time: "Yest." },
          { title: "Essay Outline", course: "Writing", time: "Mon" },
        ].map(({ title, course, time }) => (
          <div key={title} className="bg-[#1A2030] rounded px-2 py-1.5">
            <div className="flex items-center justify-between gap-1">
              <div className="text-[8px] text-white font-semibold truncate">{title}</div>
              <div className="text-[7px] text-[#6B7A99] shrink-0">{time}</div>
            </div>
            <div className="text-[7px] text-[#E8A017]">{course}</div>
          </div>
        ))}
        <div className="mt-auto flex items-center gap-1 bg-[#E8A017] rounded-lg px-2 py-1.5">
          <div className="text-[9px] text-[#0c0a08] font-semibold">New Note</div>
          <ArrowRight size={8} className="text-[#0c0a08] ml-auto" />
        </div>
      </div>
    );

  return null;
}

export default PhoneScreen;