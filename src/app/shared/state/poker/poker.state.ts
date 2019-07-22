import { Poker } from '@shared/interfaces/poker.interface';

export interface PokerState {
    ids: number[];
    entities: {[key: string]: Poker}
}