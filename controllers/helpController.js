const helpModel = require('../models/helpModel');

let matchedRefs;
let searched;

exports.getHelpPage = (req, res, next) => {
  console.log(matchedRefs);
  res.render('help', {
    refs: matchedRefs,
    searchedInp: searched,
  });
};

exports.postHelpPage = (req, res, next) => {
  searched = req.body.help;
  const HelpModel = new helpModel.helpModel(searched);
  matchedRefs = HelpModel.fetchRefs();
  res.redirect('/help');
};
