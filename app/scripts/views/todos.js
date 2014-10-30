/*global BackboneTodo, Backbone, JST*/

var app = app || {};

(function () {
    'use strict';

    app.TodoView = Backbone.View.extend({
        template: _.template( $('#item-template').html() ),
     //template: JST['app/scripts/templates/todos.ejs'],//

        tagName: 'li',

        id: '',

        className: '',

        events: {
          'dblclick label': 'edit',
          'keypress .edit': 'updateOnEnter',
          'blur .edit': 'close'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$input = this.$('.edit');
            return this;
        },

        edit: function() {
          this.$el.addClass('editing');
          this.$input.focus();
        },

        close: function() {
          var value = this.$input.val().trim();

          if ( value ) {
            this.model.save({ title: value });
          }

          this.$el.removeClass('editing');
        },

        updateOnEnter: function( event ) {
          if (event.keyCode === 13 ) {
            this.close();
          }
        }

    });

})();
