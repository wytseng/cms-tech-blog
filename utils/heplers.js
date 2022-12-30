module.exports = {
  format_date: (date) => {
    return date.toLocaleString().split(",")[0];
  },
};