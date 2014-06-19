window.onload = function() {
    var bears = new Bears();
    bears.fetch({
        success : function() {
            console.log(JSON.stringify(bears));
        }
    });

    var bear = new Bear({
        _id : "539b8e8f6780e19514000001"
    });
    var bearListView = new BearListView({
        collection : bears
    });
    bear.fetch({
        success : show
    });

    // console.log();
    function show() {
        bearListView.render();
        $("#1").html(bearListView.el);
    }

};

