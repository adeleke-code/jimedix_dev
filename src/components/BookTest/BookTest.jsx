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
  // Should format date value before submit.
  const rangeValue = fieldsValue["range-picker"];
  const rangeTimeValue = fieldsValue["range-time-picker"];
  const values = {
    ...fieldsValue,
    "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
    "date-time-picker": fieldsValue["date-time-picker"].format(
      "YYYY-MM-DD HH:mm:ss"
    ),
    "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
    "range-picker": [
      rangeValue[0].format("YYYY-MM-DD"),
      rangeValue[1].format("YYYY-MM-DD"),
    ],
    "range-time-picker": [
      rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
      rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
    ],
    "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
  };
  console.log("Received values of form: ", values);
};
const BookTest = () => (
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
export default BookTest;
