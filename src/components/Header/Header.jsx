import banner from "../../assets/banner.jpg";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header
      className="h-150 border w-full bg-cover bg-center flex flex-col items-center justify-around"
      style={{ backgroundImage: `url(${banner})`}}
    >
      <div>
        <img src={logo} alt="logo" className="h-25 w-25 animate-fadeIn "/>
      </div>
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl animate-slideDown">Health & Fitness CLub</h1>
      <div className="text-white text-center md:text-2xl">
        <p>Current hours of operation:</p>
        <p>Monday - Thursday: 5:30am - 10pm</p>
        <p>Friday: 5:30am - 9pm</p>
        <p>Saturday & Sunday: 8am - 8pm</p>
      </div>
      <div className="text-white w-full items-center flex flex-col sm:justify-center sm:flex-row  gap-6">
        <Button
          textButton={'IMAGE GALLERY'}
          background={'bg-orange-500'}
          border={'border-none'}
          animation={"animation-left" } 
        />
        <Button
          textButton={'RECORDED CLASSES'}
          border={'border-orange-500'}
          animation={'animation-right'}  
        />
      </div>
    </header>
  );
};

export default Header;
