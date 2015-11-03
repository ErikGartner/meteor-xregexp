Package.describe({
  name: 'smoiz:xregexp',
  version: '1.0.1',
  summary: 'A wrapper for the extended regex library XRegExp.',
  git: 'https://github.com/smoiz/meteor-xregexp',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('xregexp-all.js');
  api.export('XRegExp');
});
