import BeneficsSection from "../components/BeneficsSection/BeneficsSection"
import BookSection from "../components/BookSection/BookSection"
import Header from "../components/Header/Header"
import NewsSection from "../components/NewsSection/NewsSection"
import ServicesSection from "../components/ServicesSection/ServicesSection"
import TrainingSection from "../components/TrainingSection/TrainingSection"
import MemberShipSection from "../components/MemberShipSection/MemberShipSection"
import AmenitiesSection from "../components/AmenitiesSection/AmenitiesSection"
import NetworksSection from "../components/NetworksSection/NetworksSection"
import TrainerSection from "../components/TrainerSection/TrainerSection"
import ContactSection from "../components/ContactSection/ContactSection"
import FooterSection from "../components/FooterSection/FooterSection"

const Home = () => {
  return (
    <> 
      <Header/>
      <ServicesSection/>
      <BookSection/>
      <TrainingSection/>
      <BeneficsSection/>
      <NewsSection/>
      <MemberShipSection/>
      <AmenitiesSection/>
      <NetworksSection/>
      <TrainerSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default Home
