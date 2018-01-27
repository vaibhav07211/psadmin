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
	}
};

module.exports = AuthorActions;