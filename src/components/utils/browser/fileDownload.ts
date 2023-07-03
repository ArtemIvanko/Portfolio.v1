interface IFileDownloadByUrlOptions {
  url: string;
  fileName: string;
  onSuccess?: () => void;
  onError?: () => void;
}

export const fileDownloadByURL = async ({
  url,
  fileName,
  onError,
  onSuccess,
}: IFileDownloadByUrlOptions) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const objectURL = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = objectURL;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      a.remove();
      window.URL.revokeObjectURL(objectURL);
    }, 4e4);

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    if (onError) {
      onError();
    }
  }
};
