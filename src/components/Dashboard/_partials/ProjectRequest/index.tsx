//api calls
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import submitProjectRequest from 'api/ProjectApi';
//third party
import { Button, Form, Input } from 'antd';
import { UploadProps } from 'antd';
import PhoneInput from 'antd-phone-input';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useState } from 'react';

interface ProjectRequestFormData {
  name: string;
  email: string;
  phone: string;
  projectName: string;
  estimatedBudget: string;
  projectDuration: string;
  companyName: string;
  requiredTechnologies: string;
  projectDescription: string;
}

const ProjectRequest = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [form] = Form.useForm();
  const { Dragger } = Upload;

  // antd upload props to handle file uploads
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    beforeUpload(file) {
      setUploadedFiles((prev) => [...prev, file]);
      return false; // prevent auto upload
    },
    onRemove(file) {
      setUploadedFiles((prev) => prev.filter((f) => f.uid !== file.uid));
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    }
  };

  // async fxn to handle file uploads to mock Api
  const uploadFiles = async (files: File[]): Promise<string[]> => {
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

  // mutation to handle project request submission
  const mutation = useMutation<any, Error, ProjectRequestFormData>({
    mutationFn: submitProjectRequest,
    onSuccess: () => {
      message.success('Project Request Submitted Successfully!');
      form.resetFields(); // Clear the form
    },
    onError: () => {
      message.error('Something went wrong. Please try again.');
    }
  });
  // handle form submission
  const onFinish = async (values: any) => {
    try {
      let uploadedUrls: string[] = [];
      if (uploadedFiles.length > 0) {
        uploadedUrls = await uploadFiles(uploadedFiles);
      }

      const formattedValues = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        projectName: values['project-name'],
        estimatedBudget: values['estimated-budget'],
        projectDuration: values['project-duration'],
        companyName: values['company-name'],
        requiredTechnologies: values['required-technologies'],
        projectDescription: values['project-description'],
        uploadedFiles: uploadedUrls // <-- attach uploaded file URLs
      };

      mutation.mutate(formattedValues);
      console.log('Form Data:', formattedValues);
    } catch (error) {
      console.error('Error uploading files:', error);
      message.error('Failed to upload files.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Project Request</h1>
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
            rules={[{ required: true, message: 'Please Enter your Name' }]}
          >
            <Input size="large" placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please Enter your Email' }]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please Enter your Phone Number' }
            ]}
          >
            <PhoneInput size="large" placeholder="Phone number" enableSearch />
          </Form.Item>
          <Form.Item
            name="project-name"
            rules={[
              { required: true, message: 'Please Enter your Project Name' }
            ]}
          >
            <Input size="large" placeholder="Project Name" />
          </Form.Item>
          <Form.Item
            name="estimated-budget"
            rules={[
              { required: true, message: 'Please Enter your Estimated Budget' }
            ]}
          >
            <Input size="large" placeholder="Estimated Budget" />
          </Form.Item>
          <Form.Item
            name="project-duration"
            rules={[
              { required: true, message: 'Please Enter your Project Duration' }
            ]}
          >
            <Input size="large" placeholder="Duration (days) e.g 30days" />
          </Form.Item>
          <Form.Item
            name="company-name"
            rules={[
              { required: true, message: 'Please Enter your Company Name' }
            ]}
          >
            <Input size="large" placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            name="required-technologies"
            rules={[
              {
                required: true,
                message: 'Please Enter your Required Technologies'
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
          <Dragger {...props}>
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
            name="project-description"
            rules={[
              {
                required: true,
                message: 'Please Enter your Project Description'
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
          className="flex-1  !h-[50px] !w-[200px]"
          size="large"
          // loading={mutation.isLoading}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProjectRequest;
