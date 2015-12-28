import {Component} from "angular2/angular2";
import {View} from "angular2/angular2";
import {NgFor} from "angular2/angular2";
import {bootstrap} from "angular2/angular2";

@Component({
    selector: 'todo-list'
})

@View({
    template: `
    <ul>
        <li *ng-for="#todo of todos; #index = index">
            <span>{{todo}}</span>
            <button (click)="removeTodo(index)">del</button>
        </li>
    </ul>

    <input #todotext (keyup)="doneTyping($event)">
    <button (click)="addTodo(todotext.value)">add</button>
    `,
    directives: [NgFor]
})

export class TodoList {
    todos: Array<string>;

    constructor() {
        this.todos = [];
    }

    addTodo(todo: string) {
        this.todos.push(todo);
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
    }

    doneTyping($event) {
        if($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    }
}