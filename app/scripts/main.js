/*global BackboneTodo, $*/

var app = app || {};
app.ENTER_KEY = 13;


app.init = function () {
    'use strict';
    console.log('Backbone is started');
    new app.AppView();
};

$(document).ready(function () {
    'use strict';
     app.init();
});
