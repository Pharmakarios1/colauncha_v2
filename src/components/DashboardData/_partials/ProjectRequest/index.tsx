// API calls
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
// Third party
import { Button, Form, Input, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import PhoneInput from 'antd-phone-input';
import { InboxOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useState } from 'react';

// Define API base URL
const API_BASE_URL = 'https://api-colauncha.vercel.app/api';

export interface ProjectRequestFormData {
  name: string;
  email: string;
  phone: string;
  projectName: string;
  estimatedBudget: string;
  projectDuration: string;
  companyName: string;
  requiredTechnologies: string;
  projectDescription: string;
  uploadedFiles?: string[];
}

interface ProjectFormValues {
  name: string;
  email: string;
  phone: string;
  project_name: string;
  estimated_budget: string;
  max_project_time: string;
  company_name: string;
  required_technologies: string;
  project_description: string;
}

const ProjectRequest = () => {
   const { Dragger } = Upload;
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axios.post(
        `${API_BASE_URL}/requests/form-submit`, // Updated endpoint
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return response.data;
    },
    onSuccess: () => {
      message.success('Submission successful!');
      form.resetFields();
      setFileList([]);
    },
    onError: (error: AxiosError<{ 
      message?: string;
      errors?: Record<string, string[]> 
    }>) => {
      if (error.response?.status === 422) {
        // Handle validation errors
        const validationErrors = error.response.data?.errors;
        if (validationErrors) {
          Object.entries(validationErrors).forEach(([field, messages]) => {
            form.setFields([{
              name: field,
              errors: messages
            }]);
          });
          message.error('Please fix the form errors');
        } else {
          message.error(error.response.data?.message || 'Validation failed');
        }
      } else {
        message.error(error.message || 'Submission failed');
      }
    }
  });

  const onFinish = (values: ProjectFormValues) => {
    const formData = new FormData();

    // Append all form fields
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    // Append files
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append('files', file.originFileObj);
      }
    });

    mutate(formData);
  };

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      setFileList((prev) => [...prev, file]);
      return false;
    },
    onRemove: (file) => {
      setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
    },
    fileList,
    multiple: true
  };


  return (
    <div>
      <h1 className="text-2xl font-bold mt-10 mb-4 text-center">Project Request</h1>
      <p className="text-base">
        Please fill out the form below to request a project.
      </p>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        id="project-request-form"
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
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-2 md:px-20">
          <Form.Item
            name="project_description"
            rules={[
              {
                required: true,
                message: 'Please enter your project description'
              }
            ]}
          >
            <Input.TextArea
              size="large"
              placeholder="Project Description"
              rows={4}
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
