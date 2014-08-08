Package.describe({
    summary: "Kissmetrics Smart package"
});

Package.on_use(function (api) {
    api.use('deps');
    api.use('accounts-base');
    api.use('underscore');
    api.add_files(['kissmetrics.js'], 'client');

    if (typeof api.export !== 'undefined') {
        api.export(['_kmq'], 'client');
    }
});