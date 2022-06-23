import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Observable, take } from 'rxjs';
import {
  stateSetSearchIsActive,
  stateSetSearchResult,
} from 'src/app/state/actions/state.action';
import {
  stateSearchIsActiveSelector,
  stateUsersSelector,
} from 'src/app/state/selectors/state.selector';
import { IUser } from '../../models/interfaces/user.interface';
import { IAppState } from '../../models/redux/state.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchForm: FormGroup = this.fb.group({
    searchService: [''],
  });

  searchIsActive$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private _store: Store<{ app: IAppState }>
  ) {
    this.searchIsActive$ = this._store.select(stateSearchIsActiveSelector);
  }

  ngOnInit(): void {
    const controlSearchService: AbstractControl =
      this.searchForm.controls['searchService'];
    controlSearchService.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value: string) => {
        this.startSearch(value)
      });
  }

  startSearch(value: string):void{
    if (value) {
      this.searchUsers(value).then((users) => {
        this.setSearch(users,true)
      });
    } else {
      this.setSearch([],false)
    }
  }

  async searchUsers(query: string): Promise<any> {
    let searchResult: Array<IUser> = [];
    let users$: Observable<Array<IUser>> = this._store
      .select(stateUsersSelector)
      .pipe(take(1));
    await users$.forEach((users) => {
      for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (
          JSON.stringify(user)
            .toLocaleUpperCase()
            .includes(query.toLocaleUpperCase())
        ) {
          searchResult.push(user);
        }
      }
    });
    return searchResult;
  }

  setSearch(searchResult: IUser[], searchIsActive: boolean): void {
    this._store.dispatch(stateSetSearchResult({ searchResult }));
    this._store.dispatch(stateSetSearchIsActive({ searchIsActive }));
  }

  showInfo():void{
    alert('Author: Pedro Antonio Martinez Garcia.')
  }
}
