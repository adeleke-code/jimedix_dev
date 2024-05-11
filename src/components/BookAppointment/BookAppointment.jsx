import { DatePicker, Form, Input } from "antd";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const onFinish = (fieldsValue) => {
  const values = {};
  Object.keys(fieldsValue).forEach((key) => {
    if (Array.isArray(fieldsValue[key])) {
      // Handle array values (e.g., range picker)
      values[key] = fieldsValue[key].map((value) =>
        value.format("YYYY-MM-DD HH:mm:ss")
      );
    } else if (fieldsValue[key]._isAMomentObject) {
      // Handle date values
      values[key] = fieldsValue[key].format("YYYY-MM-DD HH:mm:ss");
    } else {
      // Handle other input values
      values[key] = fieldsValue[key];
    }
  });
  console.log("Received values of form: ", values);
};

const BookAppointment = () => (
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      name={"first name"}
      label="First Name"
      rules={[{ required: true }]}
      className="font-semibold text-[20px] "
    >
      <Input className="w-full " />
    </Form.Item>
    <Form.Item
      name={"last name"}
      label="Last Name"
      rules={[{ required: true }]}
      className="font-semibold text-[20px]"
    >
      <Input className="w-full " />
    </Form.Item>
    <Form.Item
      name={"message"}
      label="Message"
      rules={[{ required: true }]}
      className="font-semibold text-[20px]"
    >
      <Input.TextArea className="w-full " />
    </Form.Item>
    <Form.Item
      name="date-time-picker"
      label="Date and Time"
      className="font-semibold text-[20px] "
      {...config}
    >
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" className="w-full" />
    </Form.Item>
  </Form>
);

export default BookAppointment;
