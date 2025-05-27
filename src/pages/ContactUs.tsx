import { Button, Card, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ContactUs = () => {
  return (
    <div className="w-[90%] md:w-[50%]  mx-auto mt-10 mb-20">
      <div>
        <Card className='!bg-[#bcd3f77d] !border-0 !shadow-none'>
          <div className="flex justify-center items-center gap-2 md:gap-10 text-nowrap">
            <img src="/gif/call.gif" alt="" className="w-14 h-20" />
            <div>
              <h3>Colauncha@gmail.com</h3>
              <p>+234 98356672867</p>
            </div>
          </div>
        </Card> 
        <Form>
          <div className="flex flex-col gap-1 w-full md:w-[600px] mt-1.5 mx-auto bg-[#bcd3f77d] p-4 rounded-lg shadow-md">
            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input type="text" className="w-full !p-2 border rounded" placeholder="Enter your name" />
            </Form.Item>
            <Form.Item  name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input type="email" className="w-full !p-2 border rounded" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
              <TextArea className="w-full !p-4 border rounded h-32" placeholder="Enter your message"></TextArea>
            </Form.Item>
            <Button type="primary" className="bg-blue-500 text-white !p-4 rounded">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
