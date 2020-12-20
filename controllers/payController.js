exports.getPayPage = (req, res, next) => {
  const people = req.query.people.split('$')[0];
  const price = req.query.people.split('$')[1].split('=')[1];
  res.render('payment', {
    people: people,
    price: price,
  });
};
