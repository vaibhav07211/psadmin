"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor: function(author){
		var newAuthour = AuthorApi.saveAuthor(author);
		
		//it will inform all the stores that new author is just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthour
		});
	},

	updateAuthor: function(author){
		var updatedAuthour = AuthorApi.saveAuthor(author);
		
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthour
		});
	},

	deleteAuthor: function(id){
		AuthorApi.deleteAuthor(id);
		
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
};

module.exports = AuthorActions;