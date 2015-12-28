import {bootstrap} from 'angular2/angular2';
import {DisplayComponent} from './show-properties';
import {FriendsService} from './friends-service';
import {TodoList} from "./todo-list";


bootstrap(DisplayComponent, [FriendsService]);
bootstrap(TodoList);