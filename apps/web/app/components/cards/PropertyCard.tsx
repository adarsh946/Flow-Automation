import Link from "next/link";
import React from "react";

function PropertyCard({
  title,
  about,
  link,
}: {
  title: React.ReactNode;
  about: React.ReactNode;
  link: React.ReactNode;
}) {
  return (
    <div
      className="bg-[rgba(31,49,33,1)] flex flex-col rounded-xl
     border-[rgba(31,49,33,1)] text-white p-5 h-64 w-96"
    >
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="text-base font-normal py-8">{about}</p>
      <Link href="#">
        <h3 className="text-2xl font-bold underline hover:no-underline hover:transition hover:duration-500 ">
          {link}
        </h3>
      </Link>
    </div>
  );
}

export default PropertyCard;
