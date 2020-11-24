import Axios from "axios";
import { NumberService } from "@/services";

jest.mock("axios");
const mockedAxios = Axios as jest.Mocked<typeof Axios>;

describe("NumberService", () => {
  it("decomposeNumber", async () => {
    // Arrange
    const payload = "something";
    mockedAxios.get.mockResolvedValue({ data: payload });
    const service = new NumberService();

    // Act
    const result = await service.decomposeNumber(1);

    // Assert
    expect(result).toBe(payload);
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
