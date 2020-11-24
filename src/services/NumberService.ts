import Axios from "axios";

export class NumberService {
  public async decomposeNumber(nb: number): Promise<string> {
    const response = await Axios.get<string>("");
    return response.data;
  }
}
