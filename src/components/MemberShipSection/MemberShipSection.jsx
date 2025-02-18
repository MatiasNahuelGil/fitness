import React from "react";
import Title from "../Title/Title";
import banner2 from "../../assets/banner-2.jpg";
import MemberShipCard from "./MemberShipCard/MemberShipCard";
import Button from "../Button/Button";

export default function MemberShipSection() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-10 bg-cover"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div className="text-white">
        <Title>
          <h2 className="animate-slideDown  text-2xl sm:text-3xl md:text-5xl">Membership Options</h2>
        </Title>
        <p className="animate-fadeIn text-center">
          All Memberships include full access to our amenities, pools, fitness
          classes & much more.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-7 items-center">
        <MemberShipCard title={'Health'} >
          <p>Unlimited</p>
          <p>Classes Daily</p>
          <p>Locker</p>
          <p> Fitness Evaluation</p>
          <p>Guest Passes</p>
          <p>1 PT</p>
          <p>Sessionure</p>
          <Button 
          textButton={'Inquire for rates'}
          border={'border-none'}
          background={'bg-orange-400'}
          />
        </MemberShipCard>
        <MemberShipCard title={'Health Plus'}>
          <p>Healths</p>
          <p>Features</p>
          <p>+Laundry</p>
          <p>Service Overnight</p>
          <p>Locker Guest</p>
          <p>Passes 3</p>
          <p>PT</p>
          <p>Sessions</p>
          <Button 
          textButton={'Inquire for rates'}
          border={'border-none'}
          background={'bg-orange-400'}
          />
        </MemberShipCard>
        <MemberShipCard title={'Other'} >
          <p>Corporate</p>
          <p>Neighborhood</p>
          <p>Student</p>
          <p>Guest</p>
          <p>Passes</p>
          <p>Spousal</p>
          <Button 
          textButton={'Learn More'}
          border={'border-none'}
          background={'bg-orange-400'}
          />
        </MemberShipCard>
      </div>
    </section>
  );
}
