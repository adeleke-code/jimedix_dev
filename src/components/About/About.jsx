
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export const About = () => {
  return (
    <section id="about-us" className="px-7 lg:px-36 mb-10 max-w-[1400px] mx-auto">
      <h2 className="text-2xl lg:text-3xl text-center mt-8 lg:mt-16 font-bold">
        About <span className="text-primary">Us</span>
      </h2>

      <div className="flex flex-col lg:flex-row mt-10 gap-8">
        <div
          className="lg:w-[50%] h-[220px] md:h-[350px]"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/flat-hand-drawn-female-team-leader-illustration_52683-55542.jpg?w=740&t=st=1708093003~exp=1708093603~hmac=9f191ac7f835580d7a4007cbe80e82c6c61c6b5bf5246850cd1b1abba3df2ac4")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="lg:w-[50%] flex flex-col gap-10">
          <p className="text-center lg:text-left text-[14px] lg:text-[16px] text-gray-500">
            To pioneer accessible and innovative healthcare solutions, striving
            towards a healthier and more resilient community. Our vision is to
            lead the way in shaping a future where everyone has equitable access
            to quality medical care, fostering a world where well-being is
            paramount.
          </p>

          <p className="text-center lg:text-left text-[14px] lg:text-[16px] text-gray-500">
            At JIMEDIX, our mission is to deliver exceptional and compassionate
            healthcare services to individuals and communities, ensuring
            personalized and evidence-based care. We are committed to advancing
            medical knowledge, embracing cutting-edge technologies, and
            fostering partnerships to create a positive impact on health
            outcomes.
          </p>

          <Link to="/about-us">
            <div className="flex items-center w-full ">
              <div className="flex items-center justify-center lg:justify-start w-full">
                <Button
                  className="font-bold hover:bg-secondary transition duration-500 hover:text-[#fff]"
                  text="text-[10px] lg:text-[16px] text-[#fff]"
                  rounded="rounded-[6px]"
                  bg="bg-primary "
                  w="w-[100px] lg:w-[200px]"
                  h="h-[30px] lg:h-[42px]"
                >
                  VIEW MORE
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
