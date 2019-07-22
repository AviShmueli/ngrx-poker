import { PokerState } from "./poker.state";
import { PokerActions, PokerActionTypes } from './poker.actions';

function pokerInitialState(): PokerState {
    return {
        ids: [],
        entities: {}
    }
}

function arrayToObject(array) {
    return array.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});
  }

export function pokerReducer(
    state: PokerState = pokerInitialState(),
    action: PokerActions
): PokerState {
    switch (action.type) {
        case PokerActionTypes.LOAD_POKERS_SUCCESS:
            return {
                ...state,
                entities: arrayToObject(action.payload)
            }
            break;
    
        default:
            break;
    }
}