import React from "react";
import Back from "@/components/common/Back";
import FeaturedCard from "@/components/Home/FeaturedCard";

const page = () => {
  return (
    <section className="mb-20">
      <Back
        name="Services"
        title="Services -All Services"
        cover="/images/services.jpg"
      />
      <div className="mx-auto max-w-[80%] ">
        <FeaturedCard />
      </div>
    </section>
  );
};

export default page;
