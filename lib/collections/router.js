Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',

    waitOn: function() {
         return  Meteor.subscribe('bands');
    },
});



Router.route('/', {name: 'landing'});

Router.route('/bands', {
    name: 'bandsList'
});

Router.route('/bands/:_id', {
    name: 'bandPage',
    data: function() {return Bands.findOne(this.params._id);}
});

Router.route('/bands/:_id/edit', {
    name: 'bandEdit',
    data: function() {return Bands.findOne(this.params._id);}
});

Router.route('/addNewBand', {name: 'addNewBand'});

var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}
