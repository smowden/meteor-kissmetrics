_kmq = window._kmq || [];


var load = function (u){
    Meteor.setTimeout(function(){
        var d = document, f = d.getElementsByTagName('script')[0],
            s = d.createElement('script');
        s.type = 'text/javascript'; s.async = true; s.src = u;
        f.parentNode.insertBefore(s, f);
    }, 1);

};


function kmHandler(){
    var ready = false;
    var dep = new Deps.Dependency;
    this.onLoad = function(){
        ready = true;
        dep.changed();
    };
    this.isReady = function(){
        dep.depend();
        return ready;
    }
}

var kmReactive = new kmHandler();



var trackLogin = _.once(function(){
    _kmq.push(['record', 'Login App']);
});

if(Meteor.settings && Meteor.settings.public !== undefined && Meteor.settings.public.kissmetrics !== undefined && Meteor.settings.public.kissmetrics.key !== undefined) {
    load('//i.kissmetrics.com/i.js');
    load('//doug1izaerwt3.cloudfront.net/' + Meteor.settings.public.kissmetrics.key + '.1.js');
    _kmq.push(kmReactive.onLoad);


    Deps.autorun(function () {
        if(kmReactive.isReady()) _kmq = window._kmq;


        if(Meteor.settings.public.kissmetrics.autoIdentify === true){
            if(Meteor.userId()){
                _kmq.push(['identify', Meteor.userId()]);
                trackLogin();
            }
        }
    });

}else{
    _kmq.push = function(){
        console.log('Your KISSmetrics key is missing from your settings, please set it in your settings file')
    }
}
