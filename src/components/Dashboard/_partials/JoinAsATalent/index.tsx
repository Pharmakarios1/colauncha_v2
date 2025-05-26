//third party
import { Button, Card, Form, Input } from 'antd';
import { UploadProps } from 'antd';
import PhoneInput from 'antd-phone-input';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const TalentRequest = () => {
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
      <h1 className="text-2xl font-bold">
        Join Us <span className="text-red-500">!</span>
      </h1>
      <p className="text-base">
        Kindly fill out the Form to Join Colauncha as a Talent
      </p>
      <div>
        <Card className="!mb-4">
          <p className="text-[10px] text-black text-center sm:text-left">
            Join us at Colauncha and be part of a vibrant community of talented
            individuals. We are dedicated to fostering a culture of innovation,
            collaboration, and growth. By joining us, you will have the
            opportunity to work on exciting projects, connect with like-minded
            professionals, and contribute to our mission of delivering
            exceptional solutions. We value diversity and inclusion, and we
            believe that every voice matters. Together, we can create a dynamic
            and inspiring environment where your skills and ideas can thrive.
            Whether you are a seasoned expert or just starting your career, we
            welcome you to apply and embark on this exciting journey with us.
            Join us at Colauncha and let's shape the future together!
          </p>
        </Card>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        id="talent-join-form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-2 md:px-20">
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input size="large" placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your Email' }]}
          >
            <Input size="large" placeholder="Enter Your Email" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please enter your phone number' }
            ]}
          >
            <PhoneInput
              size="large"
              placeholder="Enter phone number"
              enableSearch
            />
          </Form.Item>
          <Form.Item
            name="country"
            rules={[{ required: true, message: 'Please enter your country' }]}
          >
            <Input size="large" placeholder="Enter Your country Name" />
          </Form.Item>
          <Form.Item name="role" rules={[{ required: true, message: 'Role' }]}>
            <Input size="large" placeholder="Enter Your Role" />
          </Form.Item>
          <Form.Item
            name="education"
            rules={[
              {
                required: true,
                message: 'Please enter your education/certifications'
              }
            ]}
          >
            <Input
              size="large"
              placeholder="Enter Your Education/Certifications"
            />
          </Form.Item>
          <Form.Item
            name="skills"
            rules={[
              {
                required: true,
                message: 'Please enter your skills in comma separated format'
              }
            ]}
          >
            <Input size="large" placeholder="Enter Your skills" allowClear />
          </Form.Item>
          <Form.Item
            name="technologies"
            rules={[
              {
                required: true,
                message: 'Please enter your Required Tech Stack'
              }
            ]}
          >
            <Input
              size="large"
              placeholder="Enter Your selected technologies"
              allowClear
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-4 md:px-20">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Drag File Here Or Click The Button Below
            </p>
          </Dragger>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-2 md:px-20">
          <Form.Item
            name="testimonial"
            rules={[
              {
                required: true,
                message: 'Please enter your few words about yourself'
              }
            ]}
          >
            <Input.TextArea
              size="large"
              placeholder="Write a few words about yourself"
              rows={4}
            />
          </Form.Item>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          form="talent-join-form"
          className="flex-1  !h-[50px] !w-[200px]"
          size="large"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TalentRequest;
