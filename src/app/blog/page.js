import React from "react";
import Back from "@/components/common/Back";

import PropertyCard from "@/components/Home/PropertyCard";

const page = () => {
  return (
    <section className="mb-20">
      <Back
        name="Blog"
        title="Blog Grid - Our Blogs"
        cover="/images/about.jpg"
      />
      <div className="mx-auto max-w-[80%]">
        <PropertyCard />
      </div>
    </section>
  );
};

export default page;
