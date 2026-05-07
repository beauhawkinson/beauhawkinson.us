export function getDurationSince(startDate: string | Date): string {
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Account for day-of-month not yet reached
  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);

  return parts.length > 0 ? parts.join(" ") : "less than a month";
}
