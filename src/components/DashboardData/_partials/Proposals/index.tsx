import { Button, Card, Form } from 'antd';
import { UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { normFile } from '@utils/normHelperFile';

const UploadProposal = () => {
  const { Dragger } = Upload;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form Data:', values);
  };
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    }
  };
  return (
    <div>
      <div className=" w-full lg:w-[80%] mx-auto grid grid-cols-1 gap-6 mt-10 md:px-20">
        <h1 className="text-2xl font-bold text-center">Upload Proposal</h1>
        <Card>
          <p className="text-[12px] text-black text-center mt-4">
            Please upload your proposal in the format accepted below. The file
            size should not exceed 5MB.
          </p>
          <p className="text-center mt-2 text-[12px] text-blac">
            Accepted formats: PDF, DOCX, PPTX
          </p>
        </Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          id="proposal-form"
        >
          <div className="grid w-full grid-cols-1 gap-6 mt-4 md:px-20">
            <Form.Item
              name="attachment"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: 'Please upload your resume/CV'
                }
              ]}
            >
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text !text-[12px]">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint !text-[12px]">
                  Supported formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </Dragger>
            </Form.Item>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            form="proposal-form"
            className="flex-1  !h-[50px] !w-[200px] !mt-4"
            size="large"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UploadProposal;
