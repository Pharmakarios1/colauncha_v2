// Third party
import { Button, Card, Form, Input, Upload, message } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import PhoneInput from 'antd-phone-input';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { normFile } from '@utils/normHelperFile';

interface PhoneInputValue {
  countryCode: string;
  phone: string;
  country: string;
  isValid: boolean;
}

interface FormValues {
  name: string;
  email: string;
  phone: PhoneInputValue | string;
  project_name: string;
  estimated_budget: string;
  max_project_time: string;
  company_name: string;
  required_technologies: string;
  project_description: string;
  attachment?: UploadFile[];
}

const uploadProps: UploadProps = {
  name: 'file',
  multiple: true,
  accept: '.pdf,.doc,.docx,.jpg,.png',
  beforeUpload: (file: File) => {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('File must be smaller than 5MB!');
      return Upload.LIST_IGNORE;
    }
    return false;
  }
};

const ProjectRequest = () => {
  const { Dragger } = Upload;
  const [form] = Form.useForm();
  const [isPending, setIsPending] = useState(false);

  const onFinish = async (values: FormValues) => {
    setIsPending(true);
    try {
      const formData = new FormData();

      // Handle phone input
      if (values.phone && typeof values.phone === 'object') {
        formData.append('phone', values.phone.phone);
        formData.append('countryCode', values.phone.countryCode);
      } else {
        formData.append('phone', values.phone);
      }

      // Append other fields
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'attachment' && Array.isArray(value)) {
          value.forEach((file) => {
            if (file.originFileObj) {
              formData.append('files', file.originFileObj);
            }
          });
        } else if (key !== 'phone' && value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/form-submit`,
        {
          method: 'POST',
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      const data = await response.json();
      message.success(
        data.message || 'Project request submitted successfully!'
      );
      form.resetFields();
    } catch (error) {
      console.error('Submission error:', error);
      message.error(
        error instanceof Error
          ? error.message
          : 'Failed to submit project request. Please try again.'
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-[80%] mx-auto my-10">
     <div className='w-full lg:w-[85%] mx-auto'>
       <h1 className="text-2xl font-bold mt-10 mb-4 text-center">
        Request a Project
      </h1>
      <Card className="!text-[11px] !text-black !text-center mb-6">
        Please fill out the form below to request a project. our dedicated team
        will review your request and get back to you with mvp as soon as
        possible.
      </Card>
     </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        id="project-request-form"
        validateTrigger={['onBlur', 'onChange']}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-2 md:px-20">
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input size="large" placeholder="Name" autoComplete="auto" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please enter your phone number' }
            ]}
          >
            <PhoneInput
              size="large"
              placeholder="Phone number"
              enableSearch
              country="ng" // Default country can be set to 'ng' for Nigeria
            />
          </Form.Item>
          <Form.Item
            name="project_name"
            rules={[
              { required: true, message: 'Please enter your project name' }
            ]}
          >
            <Input size="large" placeholder="Project Name" />
          </Form.Item>
          <Form.Item
            name="estimated_budget"
            rules={[
              { required: true, message: 'Please enter your estimated budget' }
            ]}
          >
            <Input size="large" placeholder="Estimated Budget" />
          </Form.Item>
          <Form.Item
            name="max_project_time"
            rules={[
              { required: true, message: 'Please enter your project duration' }
            ]}
          >
            <Input size="large" placeholder="Duration (days) e.g 30days" />
          </Form.Item>
          <Form.Item
            name="company_name"
            rules={[
              { required: true, message: 'Please enter your company name' }
            ]}
          >
            <Input size="large" placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            name="required_technologies"
            rules={[
              {
                required: true,
                message: 'Please enter your required technologies'
              }
            ]}
          >
            <Input
              size="large"
              placeholder="Required Technologies e.g React, Node.js"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-4 md:px-20">
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
            <Dragger {...uploadProps}>
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

        <div className="grid grid-cols-1 gap-6 mt-2 md:px-20">
          <Form.Item
            name="why_volunteer"
            rules={[
              {
                required: true,
                message: 'Please tell us something about yourself'
              },
              {
                min: 50,
                message: 'Please write at least 50 characters about yourself'
              },
              {
                max: 500,
                message: 'Please keep your introduction under 500 characters'
              }
            ]}
          >
            <Input.TextArea
              size="large"
              placeholder="Write a few words about yourself (50-500 characters)"
              rows={4}
              showCount
              maxLength={500}
            />
          </Form.Item>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          form="project-request-form"
          className="flex-1 !h-[50px] !w-[200px]"
          size="large"
          loading={isPending}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProjectRequest;
