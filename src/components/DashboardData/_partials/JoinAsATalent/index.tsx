import { useMutation } from '@tanstack/react-query';
import submitTalentRequest from 'api/TalentApi';
import { Button, Card, Form, Input, message, Upload } from 'antd';
import type { UploadProps } from 'antd';
import PhoneInput from 'antd-phone-input';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';

export interface TalentRequestFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  education: string;
  skills: string;
  technologies: string;
  testimonial: string;
  uploadedFiles?: string[];
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  education: string;
  skills: string;
  technologies: string;
  testimonial: string;
}

type UploadedFile = {
  uid: string;
  name: string;
  size: number;
  type: string;
} & File;

const TalentRequest = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [form] = Form.useForm();
  const { Dragger } = Upload;

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    beforeUpload(file) {
      setUploadedFiles((prev) => [...prev, file as UploadedFile]);
      return false; // prevent auto upload
    },
    onRemove(file) {
      setUploadedFiles((prev) => prev.filter((f) => f.uid !== file.uid));
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    }
  };

  const uploadFiles = async (files: UploadedFile[]): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch(
        'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        {
          method: 'POST',
          body: formData
        }
      );
      const data = await response.json();
      uploadedUrls.push(data.url); // adjust based on API response
    }
    return uploadedUrls;
  };

  const mutation = useMutation<void, Error, TalentRequestFormData>({
    mutationFn: submitTalentRequest,
    onSuccess: () => {
      message.success('Talent Request Submitted Successfully!');
      form.resetFields();
      setUploadedFiles([]);
    },
    onError: () => {
      message.error('Something went wrong. Please try again.');
    }
  });

  const onFinish = async (values: FormValues) => {
    try {
      let uploadedUrls: string[] = [];
      if (uploadedFiles.length > 0) {
        uploadedUrls = await uploadFiles(uploadedFiles);
      }

      const formattedValues: TalentRequestFormData = {
        ...values,
        uploadedFiles: uploadedUrls
      };

      mutation.mutate(formattedValues);
    } catch (error) {
      console.error('Error uploading files:', error);
      message.error('Failed to upload files.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Join Us <span className="text-red-500">!</span>
      </h1>
      <div className="flex justify-between items-center lg:w-[85%] mx-auto">
        <p>Tech Talents</p>
        <Button type='text' className='!text-blue-400'>View All</Button>
      </div>
      <div className="h-16 mb-20 mt-[20px] w-full hidden lg:grid grid-cols-4 items-center lg:w-[50%] mx-auto">
        <img src="/png/frame1.png" alt="" className="w-32 h-32" />
        <img src="/png/frame2.png" alt="" className="w-28 h-28" />
        <img src="/png/frame3.png" alt="" className="w-28 h-28" />
        <img src="/png/frame4.png" alt="" className="w-32 h-32" />
      </div>

      <Card className="!mb-4 !w-full md:!w-[87%] !mx-auto">
        <p className="text-[10px] text-black text-center ">
          Join us at Colauncha and be part of a vibrant community of talented
          individuals. We are dedicated to fostering a culture of innovation,
          collaboration, and growth. By joining us, you will have the
          opportunity to work on exciting projects, connect with like-minded
          professionals, and contribute to our mission of delivering exceptional
          solutions.
        </p>
      </Card>

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
          className="flex-1 !h-[50px] !w-[200px]"
          size="large"
          loading={mutation.isPending}
          disabled={mutation.isPending}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TalentRequest;
