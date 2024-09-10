const { addBabelPlugins, override } = require('customize-cra');
module.exports = override(...addBabelPlugins('mightymeld/babel-plugin-mightymeld'));