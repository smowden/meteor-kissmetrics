Package.describe({
  name: "smowden:kissmetrics",
  summary: "Kissmetrics Smart package",
  version: "0.1.0",
  git: "https://github.com/smowden/meteor-kissmetrics.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use('deps');
    api.use('accounts-base');
    api.use('underscore');
    api.add_files(['kissmetrics.js'], 'client');

    if (typeof api.export !== 'undefined') {
        api.export(['_kmq'], 'client');
    }
});