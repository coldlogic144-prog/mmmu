/**
 * The Ledger — static demo data.
 *
 * This keeps components clean and gives a single source of truth for the
 * dashboard's content. In a real deployment these would be replaced by the
 * Firebase / DB layer; here they make the whole experience feel instant and
 * self-contained.
 */

export type Branch = {
  id: string;
  name: string;
  sections: string[];
};

export const BRANCHES: Branch[] = [
  { id: "civil", name: "Civil Engineering (CED)", sections: ["A", "B"] },
  { id: "cse", name: "Computer Sc. & Engineering (CSD)", sections: ["A", "B", "C", "D"] },
  { id: "it", name: "Information Technology", sections: ["A", "B"] },
  { id: "ece", name: "Electronics & Comm. Engg.", sections: ["A", "B", "C"] },
  { id: "me", name: "Mechanical Engineering", sections: ["A", "B"] },
  { id: "bba", name: "BBA", sections: ["A", "B"] },
];

export type Period = {
  slot: string;
  code: string;
  name: string;
  type: "Lecture" | "Practical" | "Tutorial" | "Free";
  room: string;
  start: string; // "09:00"
  end: string; // "10:00"
};

export type BellDay = Record<string, PERIODS[]>;

export type BellSchedule = {
  day: string;
  periods: PERIODS[];
const SLOT_TIMES: { name: string; start: string; end: string }[] = [
  { name: "I", start: "09:00", end: "10:00" },
  { name: "II", start: "10:00", end: "11:00" },
  { name: "III", start: "11:00", end: "12:00" },
  { name: "IV", start: "12:00", end: "13:00" },
  { name: "V", start: "14:00", end: "15:00" },
  { name: "VI", start: "15:00", end: "16:00" },
  { name: "VII", start: "16:00", end: "17:00" },
  { name: "VIII", start: "17:00", end: "18:00" },
];

// Minimal row shape: [code, name, type, room]
type Row = [string, string, PeriodType, string];

const MONDAY: Row[] = [
  ["BSM-110", "Engineering Mathematics I", "Lecture", "TL-206"],
  ["BSM-131", "Engineering Physics", "Lecture", "TL-201"],
  ["BCS-110", "Introduction to C", "Practical", "CRL-3"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-110", "Mathematics Tutorial", "Tutorial", "S-2"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-109"],
];

const TUESDAY: Row[] = [
  ["BSM-110", "Engineering Mathematics I", "Lecture", "TL-206"],
  ["BCS-110", "Introduction to C", "Lecture", "TL-201"],
  ["BCS-111", "Web Designing I", "Practical", "Lab-5"],
  ["", "Self Study / Library", "Free", "—"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-109"],
  ["BSM-131", "Engineering Physics", "Lecture", "TL-201"],
];

const WEDNESDAY: Row[] = [
  ["BSM-131", "Engineering Physics", "Practical", "Lab-2"],
  ["BCS-110", "Introduction to C", "Lecture", "TL-301"],
  ["", "Self Study / Library", "Free", "—"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-110", "Mathematics Tutorial", "Tutorial", "S-2"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-109"],
];
};

// Weekday schedule for a CSE student, section A. Period labels are MMMUT style
// (I … VIII) and timings are illustrative.
export function todaySchedule(dayOverride?: string): BellSchedule {
  const full = (dayOverride ?? new Date().toLocaleDateString("en-US", { weekday: "long" }));
  return { day: full, periods: scheduleForDay(full) };
}

const PERIOD_SLOTS: { name: string; start: string; end: string }[] = [
  { name: "I", start: "09:00", end: "10:00" },
  { name: "II", start: "10:00", end: "11:00" },
  { name: "III", start: "11:00", end: "12:00" },
  { name: "IV", start: "12:00", end: "13:00" },
  { name: "V", start: "14:00", end: "15:00" },
  { name: "VI", start: "15:00", end: "16:00" },
  { name: "VII", start: "16:00", end: "17:00" },
  { name: "VIII", start: "17:00", end: "18:00" },
];

type PeriodSeed = string[]; // [code, name, type, room]

const MONDAY: PeriodSeed[] = [
  ["BSM-110", "Engineering Mathematics I", "Lecture", "TL-206"],
  ["BSM-131", "Engineering Physics", "Lecture", "TL-201"],
  ["BCS-110", "Introduction to C", "Practical", "CRL-3"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-110", "Mathematics Tutorial", "Tutorial", "S-2"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-109"],
];

const TUESDAY: PerDay[] = [
  ["BSM-110", "Engineering Mathematics I", "Lecture", "TL-206"],
  ["BCS-110", "Introduction to C", "Lecture", "TL-201"],
  ["BCS-111", "Web Designing I", "Practical", "Lab-5"],
  ["", "Self Study / Library", "Free", "—"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-109"],
  ["BSM-131", "Engineering Physics", "Lecture", "TL-201"],
];

const WEDNESDAY: PerDay[] = [
  ["BSM-131", "Engineering Physics", "Practical", "Lab-2"],
  ["BCS-110", "Introduction to C", "Lecture", "TL-301"],
  ["", "Self Study / Library", "Free", "—"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-110", "Mathematics Tutorial", "Tutorial", "S-2"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-109"],
];

const THURSDAY: PerDay[] = [
  ["", "Self Study / Library", "Free", "—"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-131", "Engineering Physics", "Practical", "Lab-2"],
  ["BCS-111", "Web Designing I", "Practical", "Lab-5"],
const THURSDAY: Row[] = [
  ["", "Self Study / Library", "Free", "—"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-131", "Engineering Physics", "Practical", "Lab-2"],
  ["BCS-111", "Web Designing I", "Practical", "Lab-5"],
  ["", "Sports / Club Activity", "Free", "GV"],
  ["", "Self Study / Library", "Free", "—"],
];

const FRIDAY: Row[] = [
  ["BSM-110", "Mathematics Tutorial", "Tutorial", "S-2"],
  ["BCS-111", "Web Designing I", "Lecture", "TL-301"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-206"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-131", "Engineering Physics", "Lecture", "TL-201"],
  ["", "Club Hour", "Free", "Clubs"],
];

const SCHEDULE_BY_DAY: Record<string, Period[]> = {};

function build(rows: Row[]): Period[] {
  return rows.map((row, i) => {
    const slot = SLOT_TIMES[i] ?? { name: String(i + 1), start: "—", end: "—" };
    return {
      slot: slot.name,
      code: row[0],
      name: row[1],
      type: row[2],
      room: row[3],
      start: slot.start,
      end: slot.end,
    };
  });
}

SCHEDULE_BY_DAY["Monday"] = build(MONDAY);
SCHEDULE_BY_DAY["Tuesday"] = build(TUESDAY);
SCHEDULE_BY_DAY["Wednesday"] = build(WEDNESDAY);
SCHEDULE_BY_DAY["Thursday"] = build(THURSDAY);
SCHEDULE_BY_DAY["Friday"] = build(FRIDAY);
  ["", "Sports / Club Bio", "Free", "GV"],
  ["", "Self Study / Library", "Free", "—"],
];

const FRIDAY: PerDay[] = [
  ["BSM-110", "Mathematics Tutorial", "Tutorial", "S-2"],
  ["BCS-111", "Web Designing I", "Lecture", "TL-301"],
  ["BHS-101", "Universal Human Values", "Lecture", "TL-206"],
  ["", "Self Study / Library", "Free", "—"],
  ["BSM-131", "Engineering Physics", "Lecture", "TL-201"],
  ["", "Club Hour", "Free", "Clubs"],
];

function mapTo(seed: PerDay, idx: number): PERIODS {
  const slot = PERIOD_SLOTS[idx] ?? { name: String(idx + 1), start: "—", end: "—" };
  const [code, name, type, room] = seed;
  return {
    name: slot.name,
    code,
    name,
    type,
    room,
    start: slot.start,
    end: slot.end,
  };
}

const SCHEDULES: Record<string, PERIODS[]> = {};

function seed(...pairs: [string, PerDay[]][]): PERIODS[] {}

export const scheduleFor: Record<string, PERIODS[]> = {};

// compact builder
const DAYS: [string, PerDay[]][] = [
  ["Monday", MONDAY],
  ["Tuesday", TUESDAY],
  ["Wednesday", WEDNESDAY],
  ["Thursday", THURSDAY],
  ["Friday", FRIDAY],
];
for (const [day, seed] of DAYS) {
  scheduleFor[day] = seed.map((s, i) => ({
    ...,
  }));
}