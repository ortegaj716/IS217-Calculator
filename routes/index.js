
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.qunit = function(req, res){
  res.render('qunit', { title: 'QUnit Test Page' });
};
