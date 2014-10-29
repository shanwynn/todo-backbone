/*global Generator, Backbone*/

var app = app || {};

(function () {
    'use strict';

    app.Todo = Backbone.Model.extend({

        url: 'http://tiny-pizza-server.herokuapp.com/collections/SWtodo',

        initialize: function() {
        },

        defaults: {
          title: '',
          completed: false
        },

        toggle: function() {
          this.save({
            completed: !this.get('completed')
          });

        }
    });

})();
