var watch = require('./node_modules/@ionic/app-scripts/dist/watch');
var copy = require('./node_modules/@ionic/app-scripts/dist/copy');
var copyConfig = require('./copy-hack.config');

var arr = [];

for (var _i = 0, _a = Object.keys(copyConfig); _i < _a.length; _i++) {
  var key = _a[_i];
  arr = arr.concat ( copyConfig[key].src );
}

var config_hack = {
    paths: arr,
    options: {
        ignored: [ '**/*.DS_Store' ]
    },
    callback: watch.copyUpdate
};

module.exports = {
  srcFiles: {
    paths: ['{{SRC}}/**/*.(ts|html|scss)'],
    options: { ignored: ['{{SRC}}/**/*.spec.ts', '**/*.DS_Store'] },
    callback: watch.buildUpdate
  },
  copyConfig: config_hack
};
