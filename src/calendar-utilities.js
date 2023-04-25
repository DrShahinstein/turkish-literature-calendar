const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const isLeapYear =
  currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0);
const months = {
  0: { name: "ocak", days: 31 },
  1: { name: "şubat", days: isLeapYear ? 29 : 28 },
  2: { name: "mart", days: 31 },
  3: { name: "nisan", days: 30 },
  4: { name: "mayıs", days: 31 },
  5: { name: "haziran", days: 30 },
  6: { name: "temmuz", days: 31 },
  7: { name: "ağustos", days: 31 },
  8: { name: "eylül", days: 30 },
  9: { name: "ekim", days: 31 },
  10: { name: "kasım", days: 30 },
  11: { name: "aralık", days: 31 },
};

const range = (start, end, step = 1) => {
  return Array.from(
    { length: Math.floor((end - start) / step) + 1 },
    (_, i) => start + i * step
  );
};

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const findSpecialDay = (specialDays, targetMonth, targetDay) => {
  return specialDays
    .map((arr) =>
      arr.special_days.find(
        (d) => d.month === targetMonth && d.day === targetDay
      )
    )
    .find((d) => d !== undefined);
};

export {
  currentDate,
  currentYear,
  currentMonth,
  months,
  range,
  capitalize,
  findSpecialDay,
};
