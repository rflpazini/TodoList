angular.module('todoList', [])
    .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [{
            text: 'Testando angularjs',
            done: true
        }, {
            text: 'Fazendo uma aplicação web',
            done: false
        }];

        todoList.addTodo = function() {
            todoList.todos.push({
                text: todoList.todoText,
                done: false
            });
            todoList.todoText = '';
            $('#myModal').modal('hide');
        };

        todoList.reamaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };
    });
