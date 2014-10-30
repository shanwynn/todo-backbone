/*global BackboneTodo, Backbone, JST*/

var app = app || {};

(function () {
    'use strict';

    app.Todo = Backbone.View.extend({

        template: JST['app/scripts/templates/todo.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function (model) {
            this.model=model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
