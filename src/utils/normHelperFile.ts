

/**
 * Normalizes the file input for antd Upload component.
 * @param e - The event or file list from the Upload component.
 * @returns An array of UploadFile objects or an empty array if no files are provided.
 */
export const normFile = (e:any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

