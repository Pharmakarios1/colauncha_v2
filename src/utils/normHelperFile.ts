import {message} from 'antd';
import {Upload} from 'antd'; 

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

const props = {
  name: 'file',
  multiple: false,
  accept: '.pdf,.doc,.docx',
  beforeUpload: (file: File) => {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('File must be smaller than 5MB!');
      return Upload.LIST_IGNORE;
    }
    return false;
  },
};