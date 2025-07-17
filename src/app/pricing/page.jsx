import React from "react";
import PriceCard from "@/components/Home/PricePackage/PriceCard";
import Back from "@/components/common/Back";
const pricing = () => {
  return (
    <section className="mb-20">
      <Back
        name="30 days money back guarantee"
        title="No Extra Fees. Friendly Support"
        cover="/images/pricing.jpg"
      />
      <div className="mx-auto max-w-[80%]">
        <PriceCard />
      </div>
    </section>
  );
};

export default pricing;
