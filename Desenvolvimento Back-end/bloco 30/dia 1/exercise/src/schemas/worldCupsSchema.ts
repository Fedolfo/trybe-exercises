import { Schema, Types } from 'mongoose';

export interface ITournament {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionGoals: number;
  editionStrikers: Types.Array<string>;
  bestPlayer: string;
  bestGoalkeeper: string;
  bestYoungPlayer: string;
}

export const worldCupSchema = new Schema<ITournament>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number, required: true },
  editionStrikers: { type: [String], required: true },
  bestPlayer: { type: String, required: true },
  bestGoalkeeper: { type: String, required: true },
  bestYoungPlayer: { type: String, required: true },
}, { versionKey: false });