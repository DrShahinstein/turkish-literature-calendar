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

export { range, capitalize, findSpecialDay };
