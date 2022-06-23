import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/shared/models/interfaces/user.interface';
import { IAppState } from 'src/app/shared/models/redux/state.interface';
import { stateDeleteUser } from 'src/app/state/actions/state.action';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser | any;

  constructor(private _store: Store<{ app: IAppState }>) {}

  ngOnInit(): void {}

  deleteThisUser(): void {
    this._store.dispatch(stateDeleteUser({ id: this.user.id }));
  }
  getProfilePicture(id: number): string {
    switch (id) {
      case 1:
        return 'https://cdn2.thecatapi.com/images/MF3DMvOgb.jpg';
      case 2:
        return 'https://cdn2.thecatapi.com/images/csk.jpg';
      case 3: return 'https://cdn2.thecatapi.com/images/MTc0MDUxOQ.gif';
      case 4: return 'https://cdn2.thecatapi.com/images/Qpt1B6giu.jpg';
      case 5: return 'https://cdn2.thecatapi.com/images/1ef7P5ZB1.png';
      case 6: return 'https://cdn2.thecatapi.com/images/oP-VabK_H.jpg';
      case 7: return 'https://cdn2.thecatapi.com/images/MTc1MDUwMg.gif';
      case 8: return 'https://cdn2.thecatapi.com/images/9gh.jpg';
      case 9: return 'https://cdn2.thecatapi.com/images/au.jpg';
      case 10: return 'https://cdn2.thecatapi.com/images/MTU5MDQ4Nw.jpg';
      default:
        return 'https://cdn2.thecatapi.com/images/MF3DMvOgb.jpg';
    }
  }
}
