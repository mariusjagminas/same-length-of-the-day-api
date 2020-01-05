const findNextDate = require("./findNextDate");

module.exports = (req, res) => {
  const nextDate = findNextDate(req.query.date);
  res.json({
    nextDate,
    receivedDate: req.query.date
  });
};
