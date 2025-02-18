import Title from "../Title/Title";
import ServicesCard from "./ServicesCard/ServicesCard";
import serviceImage1 from "../../assets/service-1.png";
import serviceImage2 from "../../assets/service-2.png";
import serviceImage3 from "../../assets/service-3.png";
import serviceImage4 from "../../assets/service-4.png";

const ServicesSection = () => {
  return (
    <section className="mt-5">
      <Title>
        <h1 className="text-2xl sm:text-4xl md:text-6xl">Join now for just $10/month</h1>
      </Title>
      <div className="flex flex-col items-center md:flex-row gap-15 justify-around p-5 mt-15">
        <ServicesCard
          image={serviceImage1}
          title={"Unlimited Fitness"}
          text={
            "Enjoy unlimited access to all fitness equipment and classes, anytime."
          }
        />
        <ServicesCard
          image={serviceImage2}
          title={"Personal Training"}
          text={
            "Get personalized fitness plans tailored to your goals and needs."
          }
        />
        <ServicesCard
          image={serviceImage3}
          title={"Massage Therapy"}
          text={
            "Relax and rejuvenate with our expert massage therapy sessions."
          }
        />
        <ServicesCard
          image={serviceImage4}
          title={"Quick Workouts"}
          text={
            "Efficient, fast-paced workouts for those with limited time to spare."
          }
        />
      </div>
    </section>
  );
};

export default ServicesSection;
