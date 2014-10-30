/*global BackboneTodo, Backbone*/

var app = app || {};

(function () {
    'use strict';

    app.Todo = Backbone.Model.extend({

        url: 'https://tiny-pizza-server.herokuapp.com/collections/SWtodo',

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
