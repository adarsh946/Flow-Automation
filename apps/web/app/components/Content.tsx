import React from "react";
import PropertyCard from "./cards/PropertyCard";

function Content() {
  return (
    <section className="bg-[rgba(230,241,237,1)]">
      <div className="  max-w-7xl flex flex-col items-center mx-auto">
        <div className="font-semibold text-6xl/snug text-center max-w-4xl pb-5 pt-20 text-[#201515]">
          <h1>Build powerful workflows incredibly fast</h1>
        </div>
        <div className="text-2xl font-medium text-center my-10 max-w-4xl text-[#201515]">
          <p>
            Whether you're a team of one or a thousand, Zapier puts the power of
            automation in your hands—no coding required. Take your workflows to
            the next level with our suite of automation tools.
          </p>
        </div>
        <div>
          <video
            src="https://res.cloudinary.com/zapier-media/video/upload/q_auto:best/f_auto/v1726860621/Homepage%20%E2%80%94%20Sept%202024/sc01_HP_240917_Connect_v01_edm2pd.mp4"
            className="max-w-4xl"
            controls={false}
            muted
            autoPlay
          />
        </div>
        <div className="text-lg font-medium tracking-wide mt-20 uppercase text-[#201515]">
          <p>Meet our Automation Products</p>
        </div>
        <div className="mb-24 mt-8">
          <div className="   flex justify-between  ">
            <div className=" mr-5">
              <PropertyCard
                title={"Zaps"}
                about={
                  "Automate advanced workflows with the full building power of Zapier."
                }
                link={"Explore Zaps"}
              />
            </div>

            <div className="mx-5">
              <PropertyCard
                title={"Interfaces"}
                about={
                  "Build professional apps, forms, and web pages that easily connect to your Zaps and Tables."
                }
                link={"Explore Interfaces"}
              />
            </div>
            <div className="mx-5">
              <PropertyCard
                title={"Tables"}
                about={
                  "Get more storage and control of the data that powers your automated workflows."
                }
                link={"Explore Tables"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
