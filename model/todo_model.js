(function() {
	console.log("start!");

	var TodoItem = Backbone.Model.extend({
	});

	var todoItem = new TodoItem({});
	todoItem.url = 'http://localhost:3000/users';
	todoItem.fetch({
		success : function(collection, response) {
			console.log(response);
		}
	});
	
	console.log(todoItem.fetch());

}).call(this);
