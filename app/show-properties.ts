import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FriendsService} from './friends-service';

@Component({
  selector: 'display',
  appInjector: [FriendsService]
})

@View({
  template: `
    <p>My name {{ myName }}</p>
    <p>Friends:</p>
    <ul>
      <li *ng-for="#name of names">
          {{ name }}
      </li>
    </ul>
    <p *ng-if="names.length > 3">You have many friends!</p>
    `,
  directives: [NgFor, NgIf]
})

export class DisplayComponent {
  myName: string;
  names: Array<string>;

  constructor(_friends: FriendsService) {
    this.myName = "Artem";
    this.names = ["Olga", "Mary", "Sophiya"].concat(_friends.names[0]);
  }
}
