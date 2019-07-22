import { Action } from '@ngrx/store';
import { Poker } from '@shared/interfaces/poker.interface';

export enum PokerActionTypes {
    ADD = '[Poker] Add',
    ADD_SUCCESS = '[Poker] Add success',
    ADD_FAILED = '[Poker] Add failed',
    LOAD_POKERS = '[Poker] Load Poker',
    LOAD_POKERS_SUCCESS = '[Poker] Load Poker success',
    LOAD_POKERS_FAILED = '[Poker] Load Poker failed',
    UPDATE = '[Poker] Update',
    UPDATE_SUCCESS = '[Poker] Update success',
    UPDATE_FAILED = '[Poker] Update failed',
    DELETE = '[Poker] Delete',
    DELETE_SUCCESS = '[Poker] Delete success',
    DELETE_FAILED = '[Poker] Delete failed'
  }

  export class LoadPokers implements Action {
    readonly type = PokerActionTypes.LOAD_POKERS;
  
    constructor() {}
  }
  
  export class LoadPokersSuccess implements Action {
    readonly type = PokerActionTypes.LOAD_POKERS_SUCCESS;
  
    constructor(public payload: Array<Poker>) {}
  }
  export class LoadPokersFailed implements Action {
    readonly type = PokerActionTypes.LOAD_POKERS_FAILED;
  
    constructor(public message: string) {}
  }
  
  export class Add implements Action {
    readonly type = PokerActionTypes.ADD;
  
    constructor(public poker: Poker) {}
  }
  
  export class AddSuccess implements Action {
    readonly type = PokerActionTypes.ADD_SUCCESS;
  
    constructor(public poker: Poker) {}
  }
  export class AddFailed implements Action {
    readonly type = PokerActionTypes.ADD_FAILED;
  
    constructor(public message: string) {}
  }
  
  export class Delete implements Action {
    readonly type = PokerActionTypes.DELETE;
  
    constructor(public id: number) {}
  }
  export class DeleteSuccess implements Action {
    readonly type = PokerActionTypes.DELETE_SUCCESS;
  
    constructor(public id: number) {}
  }
  export class DeleteFailed implements Action {
    readonly type = PokerActionTypes.DELETE_FAILED;
  
    constructor(public message: string) {}
  }
  
  export class Update implements Action {
    readonly type = PokerActionTypes.UPDATE;
  
    constructor(public poker: Poker) {}
  }
  export class UpdateSuccess implements Action {
    readonly type = PokerActionTypes.UPDATE_SUCCESS;
  
    constructor(public poker: Poker) {}
  }
  export class UpdateFailed implements Action {
    readonly type = PokerActionTypes.UPDATE_FAILED;
  
    constructor(public message: string) {}
  }
  
  export type PokerActions =
    | LoadPokers  
    | LoadPokersSuccess
    | LoadPokersFailed
    | Add
    | AddSuccess
    | AddFailed
    | Delete
    | DeleteSuccess
    | DeleteFailed
    | Update
    | UpdateSuccess
    | UpdateFailed;