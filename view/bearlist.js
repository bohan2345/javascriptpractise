var BearItemView = Backbone.View.extend({
    tagName : "tr",
    events : {
        "click button" : "remove"
    },
    template : Handlebars.compile($("#bear-item").html()),
    initialize : function() {
        console.log("bear item view initialized!!");
    },
    render : function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    remove : function() {
    }
});

var BearListView = Backbone.View.extend({
    tagName : "table",
    events : {
        "click button" : "newBear"
    },
    template : Handlebars.compile($("#new-bear-item").html()),
    initialize : function() {
        console.log("bear list view initialized!!");
    },
    render : function() {
        this.$el.html("");
        this.collection.forEach(this.addOne, this);
        this.$el.append(this.template());
    },
    addOne : function(bear) {
        var bearItemView = new BearItemView({
            model : bear
        });
        this.$el.append(bearItemView.render().el);
    },
    newBear : function() {
        var name = $("#name").val();
        var HP = $("#HP").val();
        var attack = $("#attack").val();
        this.collection.create({
            name : name,
            HP : HP,
            attack : attack
        });
    }
});

var App = Backbone.View.extend({
    initialize : function() {
        this.listenTo(this.collection, "all", this.render);
    },
    render : function() {
        console.log(this.collection.length);
        var bearListView = new BearListView({
            collection : this.collection
        });
        bearListView.render();
        this.$el.html(bearListView.el);
    }
});
