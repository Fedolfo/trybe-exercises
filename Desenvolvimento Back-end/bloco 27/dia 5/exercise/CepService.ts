import { IcepApi } from './FooCepAPI';

class CepService {
  private readonly cepApi: IcepApi;

  constructor(cepApi: IcepApi) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;