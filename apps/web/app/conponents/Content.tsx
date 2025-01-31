import React from "react";

function Content() {
  return (
    <section className="bg-[rgba(230,241,237,1)]">
      <div className="  max-w-7xl flex flex-col items-center mx-auto">
        <div className="font-semibold text-6xl/snug text-center max-w-4xl pb-5 pt-20">
          <h1>Build powerful workflows incredibly fast</h1>
        </div>
        <div className="text-2xl font-medium text-center my-10 max-w-4xl">
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
        <div className="text-lg font-medium mt-8">
          <p>Meet our Automation Products</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
