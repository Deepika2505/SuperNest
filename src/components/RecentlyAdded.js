import React, { useState } from "react";
import "./../styles/RecentlyAdded.css";
import PropertyCard from "./PropertyCard";

const RecentlyAdded = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  const properties = [
    {
      images: [
        "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
      ],
      name: "Canberra House",
      location: "Narsingi, Guntur",
      cost: "45,234",
      features: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
      isTopRated: true,
    },
    {
        images: [
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        ],
        name: "Canberra House",
        location: "Narsingi, Guntur",
        cost: "45,234",
        features: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
        isTopRated: true,
      },
      {
        images: [
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        ],
        name: "Canberra House",
        location: "Narsingi, Guntur",
        cost: "45,234",
        features: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
        isTopRated: true,
      },
      {
        images: [
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        ],
        name: "Canberra House",
        location: "Narsingi, Guntur",
        cost: "45,234",
        features: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
        isTopRated: true,
      },
    
  ];

  // const scrollLeft = () => {
  //   const container = document.getElementById("recently-added-container");
  //   const newScrollPosition = Math.max(0, scrollPosition - container.offsetWidth);
  //   container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  //   setScrollPosition(newScrollPosition);
  // };

  // const scrollRight = () => {
  //   const container = document.getElementById("recently-added-container");
  //   const newScrollPosition = Math.min(
  //     container.scrollWidth - container.offsetWidth,
  //     scrollPosition + container.offsetWidth
  //   );
  //   container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  //   setScrollPosition(newScrollPosition);
  // };

  return (
    <div className="recently-added">
      <div className="recently-added-header">
        <h2 className="recently-added-title">Recently Added</h2>
        <div className="recently-added-subtext">
          <span>Looking to optimise your property's operations? </span>
          <span><a href="#join" className="join-link">Join SuperNest</a> at less than Rs. 1/month</span>
        </div>
      </div>
        <div className="recently-added-layout">
      <div id="recently-added-container" className="property-cards-container">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default RecentlyAdded;
