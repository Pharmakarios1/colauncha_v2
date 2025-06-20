import { Button, Card, Form, Input, message, Upload } from 'antd';
import { normFile } from 'utils/normHelperFile';
import PhoneInput from 'antd-phone-input';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import { useState } from 'react';

const props = {
  name: 'file',
  multiple: true,
  accept: '.pdf,.doc,.docx',
  beforeUpload: (file: File) => {
    const isLt5M = file.size / 1024 / 1024 < 3;
    if (!isLt5M) {
      message.error('File must be smaller than 3MB!');
      return Upload.LIST_IGNORE;
    }
    return false;
  }
};

interface PhoneInputValue {
  countryCode: string;
  phone: string;
  country: string;
  isValid: boolean;
}

interface FormValues {
  name: string; //required ..
  email: string; //required ..
  phone: PhoneInputValue; //required ..
  country: string; // required ..
  role: string; // required ..
  education: string; // required ..
  skills?: string; //nr ..
  projects?: string; //nr ..
  certifications?: string; //nr ..
  attachment?: UploadFile[]; // nr ..
  why_volunteer: string; // required ..
}

const TalentRequest = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { Dragger } = Upload;

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    try {
      const formData = new FormData();

      // Handle phone input (assuming it's an object with countryCode and phone number)
      if (values.phone && typeof values.phone === 'object') {
        
        formData.append('phone', values.phone.phone);
        formData.append('country', values.phone.country);
      } else {
        formData.append('phone', values.phone);
      }

      // Append other fields
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'upload' && Array.isArray(value)) {
          value.forEach((file) => {
            if (file.originFileObj) {
              formData.append('files', file.originFileObj); // Changed key to 'files'
            }
          });
        } else if (key !== 'phone' && value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      console.log('Submitting form data:', Object.fromEntries(formData.entries()));
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/volunteer-form-submit`,
        {
          method: 'POST',
          body: formData
          // Don't set Content-Type header - let the browser set it
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Submission failed with status ${response.status}`
        );
      }

      const data = await response.json();
      message.success(data.message || 'Form submitted successfully!');
      form.resetFields();
    } catch (error) {
      console.error('Submission error:', error);
      message.error(
        error instanceof Error
          ? error.message
          : 'Failed to submit form. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[80%] mx-auto my-10">
      <div>
        <h1 className="text-2xl font-bold mt-10 mb-4 text-center">
          Join Us <span className="text-red-500">!</span>
        </h1>
        <div className="flex justify-between items-center lg:w-[85%] mx-auto">
          <p>Tech Talents</p>
          {/* <Button type="text" className="!text-blue-400">
            View All
          </Button> */}
        </div>
        <div className="h-16 mb-20 mt-[20px] w-full hidden lg:grid grid-cols-4 items-center lg:w-[50%] mx-auto">
          <img src="/png/frame1.png" alt="" className="w-32 h-32" />
          <img src="/png/frame2.png" alt="" className="w-28 h-28" />
          <img src="/png/frame3.png" alt="" className="w-28 h-28" />
          <img src="/png/frame4.png" alt="" className="w-32 h-32" />
        </div>

        <Card className="!mb-4 !w-full md:!w-[87%] !mx-auto">
          <p className="text-[13px] text-black text-center ">
            Join us at Colauncha and be part of a vibrant community of talented
            individuals. We are dedicated to fostering a culture of innovation,
            collaboration, and growth. By joining us, you will have the
            opportunity to work on exciting projects, connect with like-minded
            professionals, and contribute to our mission of delivering
            exceptional solutions.
          </p>
        </Card>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        id="talent-join-form"
        validateTrigger={['onBlur', 'onChange']}
        initialValues={ {country: 'Nigeria'} }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-2 md:px-20">
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter your full name'
              },
              {
                min: 3,
                message: 'Name must be at least 3 characters'
              },
              {
                max: 50,
                message: 'Name cannot be longer than 50 characters'
              },
              {
                pattern: /^[a-zA-Z\s]*$/,
                message: 'Name can only contain letters and spaces'
              }
            ]}
          >
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Full name <span className="text-red-500">*</span></label>
            <Input size="large" placeholder="Enter Your Full Name" />
            </div>
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your email'
              },
              {
                type: 'email',
                message: 'Please enter a valid email address'
              }
            ]}
          >
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Email <span className="text-red-500">*</span></label>
            <Input size="large" placeholder="Enter Your Email" />
            </div>
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please enter your phone number'
              }
            ]}
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Phone number <span className="text-red-500">*</span></label>
              <PhoneInput
                size="large"
                placeholder="Enter phone number"
                disableParentheses={true}
                onlyCountries={['ng']}
                allowClear
                country="ng"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="country"
          >
            <div className="flex flex-col items-start">
              <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='country'>Country <span className="text-red-500">*</span></label>
              <Input size="large" value={'Nigeria'} readOnly placeholder="Country" />
            </div>
          </Form.Item>

          <Form.Item
            name="role"
            rules={[
              {
                required: true,
                message: 'Please enter your role/position'
              },
              {
                min: 2,
                message: 'Role must be at least 2 characters'
              }
            ]}
          >
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Role (e.g Frontend, DevOps) <span className="text-red-500">*</span></label>
            <Input size="large" placeholder="Enter Your Role/Position" />
            </div>
          </Form.Item>

          <Form.Item
            name="education"
            rules={[
              {
                required: true,
                message: 'Please enter your Education/certifications'
              }
            ]}
          >
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Education <span className="text-red-500">*</span></label>
            <Input
              size="large"
              placeholder="Enter Your Education/Certifications"
            />
            </div>
          </Form.Item>

          <Form.Item
            name="skills"
            rules={[
              {
                required: false,
                message: 'Please enter at least 3 skills separated by commas'
              },
              () => ({
                validator(_, value) {
                  if (
                    !value ||
                    value.split(',').filter((skill: string) => skill.trim())
                      .length >= 1
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Please enter at least 1 skills')
                  );
                }
              })
            ]}
          >
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Skills (comma separated)</label>
            <Input
              size="large"
              placeholder="Enter Your skills (comma separated)"
              allowClear
            />
            </div>
          </Form.Item>

          <Form.Item
            name="projects"
            rules={[
              {
                required: false,
                message: 'Please enter at least 1 projects'
              },
              () => ({
                validator(_, value) {
                  if (
                    !value ||
                    value.split(',').filter((tech: string) => tech.trim())
                      .length >= 1
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Please enter at least 1 projects built')
                  );
                }
              })
            ]}
          >
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Projects [link] (comma separated)</label>
            <Input
              size="large"
              placeholder="Enter projects you have worked on (comma separated)"
              allowClear
            />
            </div>
          </Form.Item>
          <Form.Item
            name="certifications"
            rules={[
              {
                required: false,
                message: 'Please enter your certifications'
              },
              {
                min: 2,
                message: 'Certification must be at least 2 characters'
              }
            ]}
          >
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Certifications (comma separated)</label>
            <Input
              size="large"
              placeholder="Enter your certifications (comma separated)"
              allowClear
            />
            </div>
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-4 md:px-20">
          <Form.Item
            name="attachment"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text !text-[12px]">
                Upload your CV or resume/supporting documents (optional)
              </p>
              <p className="ant-upload-text !text-[12px]">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint !text-[12px]">
                Supported formats: PDF, DOC, DOCX (Max 3MB)
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
            <div className="flex flex-col items-start">
            <label className="text-gray-500 pb-1 pl-1 whitespace-nowrap" htmlFor='phone'>Describe yourself (min: 50 characters) <span className="text-red-500">*</span></label>
            <Input.TextArea
              size="large"
              placeholder="Write a few words about yourself (50-500 characters)"
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
          loading={loading}
          disabled={loading}
          className="flex-1 !h-[50px] !w-[200px]"
          size="large"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
};

export default TalentRequest;
