import { model } from 'mongoose';
import { worldCupSchema, ITournament } from '../schemas/worldCupsSchema';

class WorldCupsModel {

  constructor(private worldCupsModel = model<ITournament>('tournaments', worldCupSchema)) { }

  public async getCups(): Promise<ITournament[]> {
    const cup = await this.worldCupsModel.find();
    return cup;
  }

  public async createCup(CupData: object): Promise<ITournament> {
    const cup = await this.worldCupsModel.create(CupData);
    return cup;
  }

  public async getCup(year: string): Promise<ITournament | null> {
    const cup = await this.worldCupsModel.findOne({ year });
    return cup;
  }

  public async editCup(year: string, cupData: object): Promise<ITournament | null> {
    const cup = await this.worldCupsModel.findOneAndUpdate(
      { year },
      { ...cupData },
      { new: true }
    );
    return cup;
  }

  public async deleteCup(year: string): Promise<ITournament | null> {
    const cup = await this.worldCupsModel.findOneAndDelete({ year });
    return cup;
  }
}

export default WorldCupsModel;