import { Request, Response } from 'express';
import WorldCupsService from '../services/worldCupsServices';

class WorldCupsController {
  constructor(private cupService = new WorldCupsService()) { }

  notFound = 'cup not found';

  internalError = 'Internal server error';

  public getCups = async (req: Request, res: Response): Promise<Response> => {
    try {
      const cups = await this.cupService.getCups();

      return res.status(200).send(cups);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const cup = await this.cupService.createCups(req.body);
      return res.status(201).send(cup);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.notFound });
    }
  };

  public getCup = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { year } = req.params;
      const cup = await this.cupService.getCup(year);
      if (cup) {
        return res.status(200).send(cup);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public updateCup = async (req: Request, res: Response):
    Promise<Response> => {
    try {
      const { year } = req.params;
      const cup = await this.cupService.updateCup(year, req.body);
      if (cup) {
        return res.status(200).send(cup);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public deleteCup = async (req: Request, res: Response):
    Promise<Response> => {
    try {
      const { year } = req.params;
      const cup = await this.cupService.deleteCup(year);
      if (cup) {
        return res.status(200).send(cup);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };
}

export default WorldCupsController;