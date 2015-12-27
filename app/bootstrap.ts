import {bootstrap} from 'angular2/angular2';
import {DisplayComponent} from './show-properties';
import {FriendsService} from './friends-service';


bootstrap(DisplayComponent, [FriendsService]);
