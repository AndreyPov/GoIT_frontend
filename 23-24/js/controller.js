/*jslint browser: true, devel: true, vars: true*/
/*global define:true*/

define(["jquery", "model", "view"], function ($, model, view) {
    'use strict';
    
    return function Controller(model, view) {
        var self = this;
        
        view.elements.addBtn.on('click', function () {
            var value = view.elements.input.val();
            if (value !== '') {
                model.addItem(value);
                view.updateFriends(model.data);
                view.elements.input.val('');
            }
        });
        
        view.elements.listContainer.on('click', 'img', function (e) {
            var name = $(this).parent().data('name');
            
            if ($(this).attr('alt') === "Edit") {
                var newName = prompt('Введите новое имя:', name);
                if (newName && (newName !== name)) {
                    model.editItem(name, newName);
                    view.updateFriends(model.data);
                }
            }
            
            if ($(this).attr('alt') === "Delete") {
                model.deleteItem(name);
                view.updateFriends(model.data);
            }
        });

    };
});