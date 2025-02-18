import React from "react";
import gymMen1 from "../../assets/gim.jpg";
import gymMen2 from "../../assets/gim1.jpg";
import Button from "../Button/Button";

const TrainingSection = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center md:flex-row">
        <div className="p-5 md:p-20 animation-left bg-cover w-full">
          <img src={gymMen2} alt="Man gym" className="w-full"/>
        </div>
        <div className="p-5 md:p-20 flex justify-center">
          <div className="flex flex-col items-start gap-5 justify-center animate-fadeIn">
            <h2 className="text-2xl"><b>Inviting & inspiring</b></h2>
            <p>
            Empower yourself with knowledge and take the first step towards a healthier, more balanced lifestyle. Join us today!
            </p>
            <Button
            textButton={'LEARN MORE'}
            background={'bg-orange-400'}
            border={'border-none'}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col order-2 md:order-0 items-start gap-5 justify-center p-5 md:p-20  animate-fadeIn">
          <h2 className="text-2xl"><b>Work Hard Get Results</b></h2>
          <p>
          Dedication and effort lead to success. Start your journey today and see the difference.
          </p>
          <Button
          border={'border-none'}
          background={'bg-orange-400'}
          textButton={'CONTACT US'}
          />
        </div>
        <div className="p-5 md:p-20 animation-right bg-cover w-full">
          <img src={gymMen1} alt="Man gym" className="w-full"/>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
