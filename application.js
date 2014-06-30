window.onload = function() {
    var bears = new Bears();
    var app = new App({collection:bears});
    bears.fetch({
        success:function(){
            // app.collection = bears;
            app.render();
        }
    });
    $("#app").html(app.el);
};