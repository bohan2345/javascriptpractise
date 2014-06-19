var BearListView = Backbone.View.extend({
    tagName : 'ul',
    className : 'bear-list-view',
    //template : _.template($('#bookTemplate').html()),
    render : function() {
        this.collection.forEach(this.addOne, this);
    },
    addOne : function(bear) {
        var bearItemView = new BearItemView({
            model : bear
        });
        this.$el.append(bearItemView.render().el);
    }
});

var BearItemView = Backbone.View.extend({
    tagName : "li",
    className : "bear-item-view",
    template : _.template("<div>name: <%= name %><br/>id: <%= _id %></div>"),
    // initialize : function(options) {
    // this.options = options || {};
    // },
    render : function() {
        //console.log(this.model.toJSON());
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    // show : function() {
    // this.render();
    // $("#1").html(this.el);
    // }
});

