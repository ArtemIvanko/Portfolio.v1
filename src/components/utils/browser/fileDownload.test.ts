import { fileDownloadByURL } from "./fileDownload";

interface IFileDownloadByUrlOptions {
  url: string;
  fileName: string;
  onSuccess?: () => void;
  onError?: () => void;
}

describe("fileDownloadByURL function", () => {
  const mockOptions: IFileDownloadByUrlOptions = {
    url: "https://example.com/file.pdf",
    fileName: "example.pdf",
    onSuccess: jest.fn(),
    onError: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(window.URL, "createObjectURL");
    jest.spyOn(document, "createElement");
    jest.spyOn(document.body, "appendChild");
    jest.spyOn(window, "setTimeout");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("downloads file and invokes onSuccess callback", async () => {
    const responseMock = new Response(new Blob());
    jest.spyOn(global, "fetch").mockResolvedValue(responseMock);

    await fileDownloadByURL(mockOptions);

    expect(fetch).toHaveBeenCalledWith(mockOptions.url);
    expect(window.URL.createObjectURL).toHaveBeenCalled();
    expect(document.createElement).toHaveBeenCalledWith("a");
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(window.setTimeout).toHaveBeenCalledWith(expect.any(Function), 40000);
    expect(mockOptions.onSuccess).toHaveBeenCalled();
  });

  test("handles error and invokes onError callback", async () => {
    const error = new Error("File download failed");
    jest.spyOn(global, "fetch").mockRejectedValue(error);

    await fileDownloadByURL(mockOptions);

    expect(mockOptions.onError).toHaveBeenCalled();
  });
});
