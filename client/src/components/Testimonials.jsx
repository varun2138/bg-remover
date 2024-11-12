import React from "react";
import { ImQuotesRight } from "react-icons/im";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
const testimonials = [
  {
    id: 1,
    text: "I was amazed at how quickly and accurately this app removed backgrounds from my images! It’s super intuitive, and the results look professional—no jagged edges or artifacts. Highly recommended for anyone looking to clean up photos without any hassle!",
    src: t1,
    name: "Ashuthosh Varma",
    email: "@varma__Web designer",
  },
  {
    id: 2,
    text: "This background remover has been a game-changer for my online shop. It lets me highlight my products beautifully without any distracting backgrounds, and it’s all done in seconds. I love how easy it is to use, and it’s saved me so much time!",
    src: t2,
    name: "Sarah",
    email: "@sarah__UI designer",
  },
];
const Testimonials = () => {
  return (
    <div className="mx-auto flex justify-center items-center flex-col mt-16 sm:mt-10 gap-10  pb-10">
      <h1 className="bg-gradient-to-tl dark:bg-gradient-to-tl from-slate-500 dark:from-slate-300 via-black dark:via-white to-neutral-700 dark:to-neutral-600 bg-clip-text text-transparent text-xl sm:text-2xl font-bold font-sans opacity-85 w-10/12 sm:w-1/2 text-center">
        Customer Testimonials
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-2  ">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="   border dark:border-0 mx-8 sm:mx-0 px-8 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  dark:bg-gradient-to-bl dark:from-rose-100 dark:to-teal-100  "
          >
            <ImQuotesRight className="mb-4 text-lg" />
            <p className="text-sm  font-semibold opacity-75 ">
              {testimonial.text}
            </p>
            <div className="flex gap-2 items-center mt-4">
              <div className="w-10 h-10 rounded-full overflow-hidden ">
                <img
                  src={testimonial.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>{" "}
              <div className="flex flex-col ">
                <h1 className="text-lg font-semibold font-sans text-gray-900 ">
                  {testimonial.name}
                </h1>
                <p className=" text-sm opacity-60 text-black">
                  {testimonial.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
