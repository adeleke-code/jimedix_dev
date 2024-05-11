import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { ServicesHero } from "../../components/Hero/ServicesHero";
import { NavBar } from "../../components/NavBar/NavBar";

export const Services = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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

      <Footer />
    </div>
  );
};
