import { BsCart2 } from "react-icons/bs";
import Rexitin from "../../assets/jimedix_image5.jpeg";
import Indications from "../../assets/jimedix_image4.jpeg";
import Dizolve from "../../assets/jimedix_image3.jpeg";
import Rextore from "../../assets/jimedix_image2.jpeg";

const products = [
  {
    id: 1,
    image: Rexitin,
    title: "Rexitin Herbal Product",
    description: (
      <ul>
        <li>* It takes care of gas</li>
        <li>* It&apos;s very good for B.P</li>
        <li>* Relieves you from stress</li>
        <li>* It can also handle malaria and typhoid</li>
        <li>* PID (Pelvic Inflammatory Disease)</li>
      </ul>
    ),
    price: "#25,000",
  },
  {
    id: 2,
    image: Indications,
    title: "Indications for Men",
    description: (
      <ul>
        <li>* Erectile dysfunction</li>
        <li>* Low sperm count/Azoospermia</li>
        <li>* Improve fertility</li>
        <li>* Premature ejaculation</li>
        <li>* UTI (Urinary Tract Infections)</li>
      </ul>
    ),
    price: "#25,000",
  },
  {
    id: 3,
    image: Dizolve,
    title: "Dizolve Herbal Product",
    description: (
      <ul>
        <li>* It dissolves Fibroid and Prostate</li>
        <li>* It dissolves hernia</li>
        <li>* Hormonal Imbalance</li>
        <li>* It also boasts libido in men</li>
        <li>* It&apos;s good for any inflammation or tumor</li>
      </ul>
    ),
    price: "#25,000",
  },
  {
    id: 4,
    image: Rextore,
    title: "Rextore Herbal Capsules",
    description: (
      <ul>
        <li>* Urinary tract infection</li>
        <li>* Staphylococcus</li>
        <li>* Ulcer</li>
        <li>* Pelvic inflammatory disease</li>
      </ul>
    ),
    price: "#25,000",
  },
];

export const Product = () => {
  return (
    <section
      id="product"
      className="sm:px-7 lg:px-32 mb-10 max-w-[1400px] mx-auto"
    >
      <h2 className="text-2xl lg:text-3xl text-center mt-8 lg:mt-16 font-bold">
        Our <span className="text-primary">Products</span>
      </h2>
      <p className="text-center w-[80%] lg:w-[50%] mx-auto mt-4 text-[14px] lg:text-[16px] text-gray-500">
        Discover Our Range of Products.
        <br />
        <b>Quality Guaranteed, Satisfaction Assured!</b>
      </p>

      <div className="mt-10 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 shadow-sm">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center gap-4 custom-hover hover:border-y-2 shadow-sm border custom-hover hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] duration-500 cursor-pointer rounded-[20px] group w-[80%] mx-auto lg:w-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-t-[20px] h-[200px] w-full"
            />
            <div className="pb-10">
              <h5 className="text-[14px] lg:text-lg font-bold text-center">
                {product.title}
              </h5>
              <p className="text-left text-[14px] lg:text-[16px] text-gray-500 px-2 pb-4 mt-2">
                {product.description}
              </p>

              <div className="flex items-center justify-center -space-x-4 mt-4 lg:opacity-0 absolute bottom-0 p-4 w-full visible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 rounded-b-[20px] -mb-9">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-20">
                  <BsCart2 size={20} color="#fff" />
                </div>
                <div className="text-primary h-8 w-24 rounded-[30px] bg-[#fff] flex items-center justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pl-3 font-bold">
                  {product.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
