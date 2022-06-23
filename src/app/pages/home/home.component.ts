import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/interfaces/user.interface';
import { IAppState } from 'src/app/shared/models/redux/state.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { stateSetUsers } from 'src/app/state/actions/state.action';
import {
  stateSearchIsActiveSelector,
  stateSearchResult,
  stateUsersSelector,
} from 'src/app/state/selectors/state.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users$: Observable<Array<IUser>>;
  searchResult$: Observable<Array<IUser>>;
  searchIsActive$:Observable<boolean>

  constructor(
    private _usersService: UsersService,
    private _store: Store<{ app: IAppState }>
  ) {
    this._usersService
      .getUsers()
      .toPromise()
      .then((response) => {
        let users: Array<IUser> = response ? response : [];
        this._store.dispatch(stateSetUsers({ users }));
      });
    this.users$ = this._store.select(stateUsersSelector);
    this.searchResult$ = this._store.select(stateSearchResult);
    this.searchIsActive$ = this._store.select(stateSearchIsActiveSelector);
  }

  ngOnInit(): void {}
}
