/*global Router, $*/

window.Router = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var app = app || {};
        var ENTER_KEY = 13;
        $(function() {
          new app.AppView();
        });
    }
};

$(document).ready(function () {
    'use strict';
    Router.init();
});
