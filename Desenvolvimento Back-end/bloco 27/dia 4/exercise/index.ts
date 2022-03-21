import fs from 'fs/promises';

interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { createdPlants: number }

const PLANTS_JSON = 'plants.json';

class Plants {
  initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }

  async rawPlant() {
    const plantsRaw = await fs.readFile(PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  async getPlants() {
    return this.rawPlant();
  }

  async getPlantById(id: string) {
    const plants: Promise<IPlant[]> = this.rawPlant();

    const plantById = (await plants).find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  async removePlantById(id: string) {
    const plants: Promise<IPlant[]> = this.rawPlant();

    const removedPlant = (await plants).find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = (await plants).filter((plant) => plant.id !== id);
    await fs.writeFile(PLANTS_JSON, JSON.stringify(newPlants));

    return removedPlant;
  }

  async getPlantsThatNeedsSunWithId(id: string) {
    const plants: Promise<IPlant[]> = this.rawPlant();

    const filteredPlants = (await plants).filter((plant) =>
    plant.needsSun && plant.id === id);

    const ifDoNotExistPlantSpecial = filteredPlants.filter((plant) =>
    plant.specialCare === undefined || plant.specialCare.waterFrequency > 2);

    if (ifDoNotExistPlantSpecial) {
      return true;
    }

    return filteredPlants;
  }

  async editPlant(plantId: string, newPlant: IPlant) {
    const plants: Promise<IPlant[]> = this.rawPlant();

    const updatedPlants = (await plants).map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(PLANTS_JSON, JSON.stringify(updatedPlants));
    return newPlant;
  }

  async savePlant(plant: IPlant) {
    const plants: Promise<IPlant[]> = this.rawPlant();

    const newPlant = this.initPlant({ ...plant });
    (await plants).push(newPlant);

    const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

    await fs.writeFile(PLANTS_JSON, JSON.stringify(plants));
    return newPlant;
  }
}

export default Plants;