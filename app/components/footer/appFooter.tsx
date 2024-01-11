import React from "react";
import ContactFooter from "./contactFooter";
import PartnersCarousel from "../../home/components/partners-carousel";

const AppFooter = () => {
  return (
    <div>
      <div className="py-3" style={{backgroundColor: "white"}}>
        <PartnersCarousel></PartnersCarousel>
      </div>
      <ContactFooter></ContactFooter>
    </div>
  );
};

export default AppFooter;
