"use client";

import React, { useState } from "react";
import { Plus, Trash2, Clock, Save, Check, MapPin } from "lucide-react";

interface PlanItem {
  id: string;
  timeOfDay: "Morning" | "Afternoon" | "Evening";
  title: string;
  note: string;
  estimatedHours: string;
}

interface DayPlan {
  dayNumber: number;
  items: PlanItem[];
}

export function InteractiveItineraryBuilder() {
  const [destination, setDestination] = useState("Pune & Sahyadri Hills");
  const [days, setDays] = useState<DayPlan[]>([
    {
      dayNumber: 1,
      items: [
        {
          id: "item-1",
          timeOfDay: "Morning",
          title: "Shaniwar Wada & Kasba Peth Heritage Walk",
          note: "Arrive at 8:30 AM before crowds. Walk through Kasba Peth and sample Bakarwadi at Chitale Bandhu.",
          estimatedHours: "2.5 hrs",
        },
        {
          id: "item-2",
          timeOfDay: "Afternoon",
          title: "Aga Khan Palace & Memorial Gardens",
          note: "Explore Anglo-Italian arch verandas and quiet Gandhi memorial grounds.",
          estimatedHours: "2 hrs",
        },
        {
          id: "item-3",
          timeOfDay: "Evening",
          title: "Kata Kirr Puneri Misal Tasting & FC Road Bookshops",
          note: "Fiery sprouted matki misal followed by filter coffee along Ferguson College road.",
          estimatedHours: "2 hrs",
        },
      ],
    },
    {
      dayNumber: 2,
      items: [
        {
          id: "item-4",
          timeOfDay: "Morning",
          title: "Dawn Ascent to Sinhagad Fort",
          note: "Hike the basalt path in morning mist, visit Tanaji Malusare samadhi, and eat hot pithla-bhakri at the summit.",
          estimatedHours: "4 hrs",
        },
        {
          id: "item-5",
          timeOfDay: "Afternoon",
          title: "Raja Dinkar Kelkar Museum",
          note: "Admire 20,000 historic Indian artifacts and Mastani Mahal timber woodwork.",
          estimatedHours: "2 hrs",
        },
      ],
    },
  ]);

  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemNote, setNewItemNote] = useState("");
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<"Morning" | "Afternoon" | "Evening">("Morning");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemTitle.trim()) return;

    const newItem: PlanItem = {
      id: `custom-${Date.now()}`,
      timeOfDay: selectedTimeOfDay,
      title: newItemTitle.trim(),
      note: newItemNote.trim() || "Self-guided walk and exploration.",
      estimatedHours: "1.5 hrs",
    };

    setDays((prev) =>
      prev.map((d) =>
        d.dayNumber === selectedDay ? { ...d, items: [...d.items, newItem] } : d
      )
    );

    setNewItemTitle("");
    setNewItemNote("");
  };

  const handleAddDay = () => {
    const nextDayNum = days.length + 1;
    setDays((prev) => [...prev, { dayNumber: nextDayNum, items: [] }]);
    setSelectedDay(nextDayNum);
  };

  const handleRemoveItem = (dayNum: number, itemId: string) => {
    setDays((prev) =>
      prev.map((d) =>
        d.dayNumber === dayNum
          ? { ...d, items: d.items.filter((item) => item.id !== itemId) }
          : d
      )
    );
  };

  const handleSaveItinerary = () => {
    try {
      const saved = {
        destination,
        days,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem("apna_tour_custom_itinerary", JSON.stringify(saved));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-[#141715] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Top Header Controls */}
      <div className="p-6 bg-[#171A18] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C85B35]">
            INTERACTIVE TRIP BUILDER
          </span>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="w-4 h-4 text-[#C85B35]" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="font-serif text-2xl font-light text-[#F3EBDD] bg-transparent border-b border-dashed border-white/20 focus:border-[#C85B35] focus:outline-none"
              aria-label="Itinerary destination name"
            />
          </div>
          <p className="text-xs text-[#85867E] mt-1 font-sans">
            Organize daily morning, afternoon, and evening blocks. Changes save locally.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddDay}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1C201D] hover:bg-[#20231F] text-[#F3EBDD] text-xs font-mono uppercase tracking-wider border border-white/10 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Day {days.length + 1}</span>
          </button>
          <button
            onClick={handleSaveItinerary}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C85B35] hover:bg-[#D28A32] text-[#FAF5EB] text-xs font-mono uppercase tracking-wider transition-colors shadow-md"
          >
            {savedSuccess ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Save Plan</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Days Tabs & Content Area */}
      <div className="p-6">
        {/* Day Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-white/10">
          {days.map((day) => (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDay(day.dayNumber)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all shrink-0 ${
                selectedDay === day.dayNumber
                  ? "bg-[#192D26] text-[#F3EBDD] border border-emerald-500/40 shadow-sm"
                  : "bg-[#1C201D] text-[#B9B4A8] hover:text-[#F3EBDD] hover:bg-[#20231F] border border-white/5"
              }`}
            >
              Day {day.dayNumber} ({day.items.length} Activities)
            </button>
          ))}
        </div>

        {/* Selected Day View */}
        {days
          .filter((d) => d.dayNumber === selectedDay)
          .map((day) => (
            <div key={day.dayNumber} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-normal text-[#F3EBDD]">
                  Day {day.dayNumber} Schedule
                </h4>
                <span className="text-xs font-mono text-[#85867E]">
                  {day.items.length === 0 ? "No activities yet" : `${day.items.length} planned items`}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {day.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[#1C201D] border border-white/10 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-3 group hover:border-white/20 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                            item.timeOfDay === "Morning"
                              ? "bg-amber-950/60 text-amber-300 border border-amber-800/30"
                              : item.timeOfDay === "Afternoon"
                              ? "bg-sky-950/60 text-sky-300 border border-sky-800/30"
                              : "bg-indigo-950/60 text-indigo-300 border border-indigo-800/30"
                          }`}
                        >
                          {item.timeOfDay}
                        </span>
                        <span className="text-xs text-[#85867E] flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-[#B98945]" />
                          {item.estimatedHours}
                        </span>
                      </div>
                      <h5 className="text-sm font-serif font-normal text-[#F3EBDD]">
                        {item.title}
                      </h5>
                      <p className="text-xs text-[#B9B4A8] leading-relaxed font-sans">
                        {item.note}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(day.dayNumber, item.id)}
                      className="text-[#85867E] hover:text-rose-400 p-1.5 rounded hover:bg-[#141715] self-end sm:self-start opacity-70 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove activity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {day.items.length === 0 && (
                  <div className="p-8 text-center bg-[#1C201D] rounded-xl border border-dashed border-white/10">
                    <p className="text-xs text-[#85867E] font-sans">
                      This day is open. Add a morning walk, temple visit, or heritage meal below.
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Add Form */}
              <form
                onSubmit={handleAddItem}
                className="mt-6 p-4 rounded-xl bg-[#171A18] border border-white/10 space-y-3"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-[#C85B35]">
                  Add Activity to Day {day.dayNumber}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <select
                    value={selectedTimeOfDay}
                    onChange={(e) =>
                      setSelectedTimeOfDay(
                        e.target.value as "Morning" | "Afternoon" | "Evening"
                      )
                    }
                    className="px-3 py-2 rounded-lg bg-[#141715] border border-white/10 text-xs text-[#F3EBDD] focus:outline-none focus:border-[#C85B35]"
                    aria-label="Time of day"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                  <input
                    type="text"
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    placeholder="Activity title (e.g. Kasba Peth walk)"
                    className="sm:col-span-2 px-3 py-2 rounded-lg bg-[#141715] border border-white/10 text-xs text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35]"
                    aria-label="Activity title"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newItemNote}
                    onChange={(e) => setNewItemNote(e.target.value)}
                    placeholder="Optional tips, opening times, or food notes"
                    className="flex-1 px-3 py-2 rounded-lg bg-[#141715] border border-white/10 text-xs text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35]"
                    aria-label="Activity notes"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#C85B35] hover:bg-[#D28A32] text-[#FAF5EB] text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}
