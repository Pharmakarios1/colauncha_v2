//third party imports
import { Button, Card, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
//api calls
import { useMutation } from '@tanstack/react-query';
import submitContactForm from 'api/ContactApi'; // Adjust the import path as necessary

const ContactUs = () => {
  const [form] = Form.useForm();

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      // Reset the form fields after successful submission
      message.success('Your message has been sent successfully!');
      form.resetFields();
    },
    onError: () => {
      message.error('Failed to send your message. Please try again later.');
    }
  });

  // Function to handle form submission
  const onFinish = async (values: Record<string, any>) => {
    try {
      const formValues: Record<string, any> = {
        name: values.name,
        email: values.email,
        message: values.message
      };
      await mutation.mutateAsync(formValues);

      console.log('Form Data:', formValues);
    } catch (error) {
      message.error('Failed to submit the form. Please try again later.');
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="w-[90%] lg:w-[50%]  mx-auto mt-10 mb-20">
      <div>
        <Card className="!bg-[#bcd3f77d]">
          <div className="flex justify-center items-center gap-2 md:gap-10 text-nowrap">
            <img src="/gif/call.gif" alt="" className="w-14 h-20" />
            <div>
              <h3>colauncha@gmail.com</h3>
              <p>+234 98356672867</p>
            </div>
          </div>
        </Card>
        <Form
          form={form}
          id="contact-form"
          className="mt-4"
          onFinish={onFinish}
        >
          <div className="flex flex-col gap-1 w-full md:w-[600px] mt-1.5 mx-auto bg-[#bcd3f77d] p-4 rounded-lg shadow-md">
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                type="text"
                className="w-full !p-2 border rounded"
                placeholder="Enter your name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input
                type="email"
                className="w-full !p-2 border rounded"
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                { required: true, message: 'Please input your message!' }
              ]}
            >
              <TextArea
                className="w-full !p-4 border rounded h-32"
                placeholder="Enter your message"
              ></TextArea>
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              form="contact-form"
              size="large"
              className="bg-blue-500 text-white !p-4 rounded"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
