var Bear = Backbone.Model.extend({
    urlRoot : 'http://localhost:8124/bears',
    idAttribute : '_id',
    defaults : {
        _id : "0",
        HP : 0,
        attack : 0,
        name : "what's this creature?"
    }
});

var Bears = Backbone.Collection.extend({
    model : Bear,
    url : 'http://localhost:8124/bears'
});

