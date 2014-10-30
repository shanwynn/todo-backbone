/*global BackboneTodo, $*/

var app = app || {};

window.Router = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        new app.AppView();
    }
};

$(document).ready(function () {
    'use strict';
  //  BackboneTodo.init();//
});
