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
  country: string;
  email: string;
  phone: PhoneInputValue | string;
  project_name: string;
  estimated_budget: string;
  max_project_time: string;
  company_name: string;
  required_skills: string;
  description: string;
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
        formData.append('country', values.phone.country);
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

      console.log(formData);
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
        Request a Team/MVP
      </h1>
      <Card className="!text-[14px] !text-gray-700 !text-center mb-6">
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
        initialValues={ {country: 'Nigeria'} }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-2 md:px-20">
        <Form.Item
            name="project_name"
            rules={[
              { required: true, message: 'Please enter your project name' }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='project_name'>Project Name <span className="text-red-500">*</span></label>
              <Input size="large" placeholder="Project Name" />
            </div>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor="email">Email <span className="text-red-500">*</span></label>
              <Input size="large" placeholder="Email" />
            </div>
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please enter your phone number' }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Phone number <span className="text-red-500">*</span></label>
              <PhoneInput
                size="large"
                placeholder="Phone number"
                enableSearch
                disableParentheses={true}
                onlyCountries={['ng']}
                country="ng" // Default country can be set to 'ng' for Nigeria
              />
            </div>
          </Form.Item>

          <Form.Item
            name="estimated_budget"
            rules={[
              { required: true, message: 'Please enter your estimated budget' }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='estimated_budget'>Budget (₦) <span className="text-red-500">*</span></label>
              <Input
                size="large"
                placeholder="Estimated Budget"
                addonBefore="₦"
              />
            </div>
          </Form.Item>
          <Form.Item
            name="max_project_time"
            rules={[
              { required: true, message: 'Please enter your project duration (days)' }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='max_project_time'>Project Duration (Days) <span className="text-red-500">*</span></label>
              <Input size="large" placeholder="Duration (days) e.g 30days" />
            </div>
          </Form.Item>
          <Form.Item
            name="company_name"
            rules={[
              { required: true, message: 'Please enter your company name' }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='company_name'>Company Name <span className="text-red-500">*</span></label>
              <Input size="large" placeholder="Company Name" />
            </div>
          </Form.Item>
          <Form.Item
            name="required_skills"
            rules={[
              {
                required: true,
                message: 'Please enter your required skills'
              }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='required_skills'>Skills <span className="text-red-500">*</span></label>
              <Input
                size="large"
                placeholder="Required Skills e.g React, Node.js"
              />
            </div>
          </Form.Item>
          <Form.Item
            name="country"
            rules={[
              { required: true, message: 'Please enter your Country' }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='country'>Country <span className="text-red-500">*</span></label>
              <Input size="large" value={'Nigeria'} readOnly placeholder="Country" />
            </div>
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-4 md:px-20">
          <Form.Item
            name="attachment"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text !text-[12px]">
                Upload your project requirements document
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
            name="description"
            rules={[
              {
                required: true,
                message: 'Please tell us about the project'
              },
              {
                min: 30,
                message: 'Please write at least 30 characters about yourself'
              },
              {
                max: 500,
                message: 'Please keep your description under 500 characters'
              }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='description'>Project Description <span className="text-red-500">*</span></label>
              <Input.TextArea
                size="large"
                placeholder="Write a few words describing the project (30-500 characters)"
                rows={4}
                showCount
                maxLength={500}
              />
            </div>
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
