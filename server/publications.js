Meteor.publish('bands', function() {
    return Bands.find();
});

Meteor.publish('venues', function() {
    return Venues.find();
});

Meteor.publish('events', function() {
    return Events.find();
});
