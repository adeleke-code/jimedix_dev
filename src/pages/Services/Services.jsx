import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { ServicesHero } from "../../components/Hero/ServicesHero";
import { NavBar } from "../../components/NavBar/NavBar";
import { Modal } from "antd";
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

export const Services = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    dateTime: null,
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateTimeChange = (value) => {
    setFormData({
      ...formData,
      dateTime: value,
    });
  };

  const onFinish = () => {
    console.log("Form Data:", formData);
    // Add logic here to submit form data to backend
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        <div
          className="px-4 lg:px-10 max-w-[1500px] m-auto relative z-10"
          style={{
            zIndex: 1,
          }}
        >
          <NavBar />
          <ServicesHero />
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
        }}
        className="lg:px-24 py-10 lg:py-20"
      >
        <h2 className="text-xl text-center lg:text-left lg:text-4xl font-bold ">
          Our Pathology Departments
        </h2>

        <div className="grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  lg:pb-20 items-center mt-10 mx-4 lg:mx-0">
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40">
            <h3 className="text-center text-[14px] lg:text-xl font-bold">
              SEROLOGY
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40">
            <h3 className="text-center text-[14px] lg:text-xl font-bold">
              HEAMATOLOGY
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40">
            <h3 className="text-center text-[14px] lg:text-xl font-bold">
              HISTOLOGY & CYTOLOGY
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40">
            <h3 className="text-center text-[14px] lg:text-xl font-bold">
              IMMUNOLOGY
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40">
            <h3 className="text-center text-[14px] lg:text-xl font-bold px-4">
              MICROBIOLOGY & PARASITOLOGY
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40 px-4">
            <h3 className="text-center text-[14px] lg:text-xl font-bold">
              THERAPEUTIC DRUG MONITORING (TDM)
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40">
            <h3 className="text-center text-[14px] lg:text-xl font-bold">
              MOLECULAR BIOLOGY
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40">
            <h3 className="text-center text-[14px] lg:text-xl font-bold px-4">
              CLINICAL CHEMISTRY
            </h3>
          </div>
          <div className=" gap-6 bg-primary text-white flex flex-col justify-center items-center h-40 px-4">
            <h3 className="text-center text-[14px] lg:text-xl font-bold">
              HEAMATOLOGY
            </h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-0 pt-10 lg:pt-0  lg:pb-20 items-center justify-between">
          <p className="lg:w-[50%] text-[14px] lg:text-xl text-center lg:text-left">
            Available Services Include: DNA Paternity testing, Toxicology/ Drug
            Abuse Tests, oncology testing, Nutritional studies, Viral Load
            Monitoring for HBV, HCV & HIV
          </p>

          <div className="mb-10 lg:mb-0 lg:mt-4 w-[50%] flex justify-center">
            <Button
              className="font-bold hover:bg-secondary hover:text-white transition duration-500"
              text="text-[10px] lg:text-xl text-[#fff]"
              rounded="rounded-none"
              bg="bg-primary "
              w="w-[100px] lg:w-[250px]"
              h="h-[30px] lg:h-[70px]"
              onClick={showModal}
            >
              Book A Test
            </Button>
          </div>
        </div>

        <div className="flex flex-col-reverse px-4 lg:px-0 lg:flex-row items-center">
          <div className="lg:w-[50%] gap-6 bg-secondary text-white flex flex-col justify-center items-start px-10 py-10 lg:py-20 lg:h-[534px]">
            <h3 className=" lg:text-2xl font-bold">Ultrasound Scans</h3>
            <p className="text-[14px] lg:text-lg">
              Our state of the art ultrasound facility performs all types of
              ultrasound scans that range from simple scans to advanced and
              specialised Doppler scans. Our facility is family friendly and our
              4D ultrasound studio provides world class baby pictures and video
              for your baby album. We offer all types of scans including
              Obstetrics, Trans-vaginal, Follicular tracking, Prostate, Regional
              doppler etc. 3D scans show still pictures of your baby in three
              dimensions. 4D scans show moving 3D images of your baby.
            </p>

            <div>
              <Button
                className="font-bold hover:bg-primary hover:text-white transition duration-500"
                text="text-[10px] text-secondary lg:text-[16px] text-[#fff]"
                rounded="rounded-none"
                bg="bg-white "
                w="w-[100px] lg:w-[200px]"
                h="h-[30px] lg:h-[42px]"
              >
                Book A Scan
              </Button>
            </div>
          </div>
          <div
            className="w-full lg:w-[50%] bg-cover h-[195px] lg:h-[534px]"
            style={{
              backgroundImage: ` url("https://images.pexels.com/photos/7089396/pexels-photo-7089396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              // backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // height: "534px",
            }}
          ></div>
        </div>

        <div className="flex flex-col mt-1 lg:mt-0 px-4 lg:px-0 lg:flex-row items-center">
          <div
            className="w-full lg:w-[50%] bg-cover h-[195px] lg:h-[702px]"
            style={{
              backgroundImage: ` url("https://images.pexels.com/photos/5940706/pexels-photo-5940706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,

              backgroundRepeat: "no-repeat",
              // height: "",
            }}
          ></div>
          <div className="lg:w-[50%] gap-6 bg-secondary text-white flex flex-col justify-center items-start px-10 py-10 lg:py-20 lg:h-[702px]">
            <h3 className=" lg:text-2xl font-bold">
              Healthcare Screening Packages
            </h3>
            <p className="text-[14px] lg:text-lg">
              We carry out various Screening packages for Organizations in
              Lagos. We have successfully done and are still doing business with
              Organizations like Alara Lekki Lagos, Maconi Wine Ltd Amuwo Lagos,
              Fresh taste Bakery Ikotun Lagos, Freshdew Bakery Okota Lagos,
              Mijome Enterprise Amuwo Lagos, Great Dimension Schools, Angels
              Foundation School, Amaekpu Women Organization, Ohaoffia Women
              Organization, Presbyterian Women Organization South Lagos District
              etc.
              <br />
              <br />
              As part of our Corporate Social Responsibility, we also partner
              with associations like Catholic Women Organization, Pneul
              Properties Ltd, Alarts Global Ltd to carry out free Trainings and
              Health Education, affordable and free Health Screenings.
            </p>

            <div>
              <Button
                className="font-bold hover:bg-primary hover:text-white transition duration-500"
                text="text-[10px] text-secondary lg:text-[16px] text-[#fff]"
                rounded="rounded-none"
                bg="bg-white "
                w="w-[180px] lg:w-[300px]"
                h="h-[30px] lg:h-[42px]"
              >
                Explore Healthcare Packages
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        open={open}
        title={
          <p className="font-bold mb-4 text-lg lg:text-xl">
            Book a Test
          </p>
        }
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        footer={() => (
          <Button onClick={onFinish} className="rounded-md">
            Submit
          </Button>
        )}
      >
        <Form
          name="time_related_controls"
          {...formItemLayout}
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
            className="font-semibold text-[20px] "
          >
            <Input
              className="w-full "
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
            className="font-semibold text-[20px]"
          >
            <Input
              className="w-full "
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true }]}
            className="font-semibold text-[20px]"
          >
            <Input.TextArea
              className="w-full "
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="dateTime"
            label="Date and Time"
            className="font-semibold text-[20px] "
            {...config}
          >
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              className="w-full"
              value={formData.dateTime}
              onChange={handleDateTimeChange}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Footer />
    </div>
  );
};
