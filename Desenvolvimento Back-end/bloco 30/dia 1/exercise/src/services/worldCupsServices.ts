import WorldCupsModel from '../models/worldCupsModel';
import { ITournament } from '../schemas/worldCupsSchema';

class WorldCupsService {
  constructor(private cupModel = new WorldCupsModel()) { }

  public async getCups(): Promise<ITournament[]> {
    const books = await this.cupModel.getCups();
    return books;
  }

  public async createCups(bookData: object): Promise<ITournament> {
    const book = await this.cupModel.createCup(bookData);
    return book;
  }

  public async getCup(year: string): Promise<ITournament | null> {
    const data = await this.cupModel.getCup(year);
    return data;
  }

  public async updateCup(year: string, bookData: object): Promise<ITournament | null> {
    const data = await this.cupModel.editCup(year, bookData);
    return data;
  }

  public async deleteCup(year: string): Promise<ITournament | null> {
    const data = await this.cupModel.deleteCup(year);
    return data;
  }
}

export default WorldCupsService;