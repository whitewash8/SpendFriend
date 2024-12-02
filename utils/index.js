/**
 * Formats a number into a human-readable string with suffixes (e.g., 1K, 1.5M).
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string.
 */

const formatNumber = (num) => {
  if (num >= 1e7) {
    return (num / 1e7).toFixed(1).replace(/\.0$/, "") + "C";
  }
  if (num >= 1e5) {
    return (num / 1e5).toFixed(1).replace(/\.0$/, "") + "L";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

export default formatNumber;
