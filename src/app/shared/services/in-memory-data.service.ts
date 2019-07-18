import { InMemoryDbService } from 'angular-in-memory-web-api';
import { pokers as pokerDB } from '../mock/pokers';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const poker = pokerDB;
    return { poker };
  }
  genId(): number {
    return Math.round(Math.random() * 1000000);
  }
}