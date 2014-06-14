(function() {
    console.log("start!");

    var Bear = Backbone.Model.extend({
        urlRoot : 'http://localhost:8124/api/bears',
        idAttribute : '_id'
    });

    var bear = new Bear({
        id : "539b8e8f6780e19514000001"
    });
    
    //Access-Control-Allow-Origin: "*"

    bear.fetch();
    console.log(bear);
}).call(this);
