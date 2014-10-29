/*global Generator, Backbone*/

var app = app || {};

(function () {
    'use strict';

    var Workspace = Backbone.Router.extend({
      routes:{
        '*filter': 'setFilter'
      },

      setFilter: function( param ) {
        if (param) {
          param = param.trim();
        }
        app.TodoFilter = param || '';
        app.Todos.trigger('filter');
      }
    });

    app.TodoRouter = new Workspace();
    Backbone.history.start();

})();
