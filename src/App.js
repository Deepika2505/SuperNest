import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import OTPModal from './components/OTPModal';
import Footer from './components/Footer';
import Search from './components/Search';
import Experience from './components/Experience';
import Content from './components/Content';
import AvailableIn from './components/AvailableIn';
import RecentlyAdded from './components/RecentlyAdded';
import HeroSection from './components/HeroSection';
import CitySearch from './components/CitySearch';
import PropertyDetails from './components/PropertyDetails';


function App(){

  const [allProperties, setAllProperties] = useState([
    {
      images: [
        "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
        "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
      ],
      name: "Canberra House",
      location: "Hyderabad",
      area: "Narsingi",
      price: "45,000",
      originalPrice: "47,000",
      gender: ["male","female"],
      occupancy: ["Single", "Double", "Triple"],
      amenities: ["Washing Machine","AC", "Attached Washroom", "Storage Shelf", "Parking"],
      isTopRated: true,
      latitude: 17.3850,
      longitude: 78.4867,
      phoneNumber: "7092482474",
      overallRating: 4.8,
      complaintResolution: 74,
      reviews: [
        {
            userName:"dontcatchme",
            userPic: "https://via.placeholder.com/50",
            comment: "Amazing place with friendly staff.",
            roomType: "Single Room",
            rating: 4.5,
            postedDate:"2025-02-06",
        },
        {
            userName:"dontcatchme",
            userPic: "https://via.placeholder.com/50",
            comment: "Amazing place with friendly staff.",
            roomType: "Single Room",
            rating: 4.5,
            postedDate:"2025-02-06",
        },
        {
            userName:"dontcatchme",
            userPic: "https://via.placeholder.com/50",
            comment: "Amazing place with friendly staff.",
            roomType: "Single Room",
            rating: 4.5,
            postedDate:"2025-02-06",
        },
        {
            userName:"dontcatchme",
            userPic: "https://via.placeholder.com/50",
            comment: "Amazing place with friendly staff.",
            roomType: "Single Room",
            rating: 4.5,
            postedDate:"2025-02-06",
        },
      ],
      rooms: [
        {
            roomType: "Single",
            price: 21000,
            originalPrice: 30000,
            securityDeposit: 15000,
            isAvailable: false,
            isTopRated: false,
            isRecommended: false,
            gender: ["male", "female"],
            images: [
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
              ],
        },
        {
            roomType: "Single",
            price: 21000,
            originalPrice: 30000,
            securityDeposit: 15000,
            isAvailable: true,
            isTopRated: true,
            isRecommended: true,
            gender: ["male", "female"],
            images: [
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
              ],
        },
        {
            roomType: "Single",
            price: 21000,
            originalPrice: 30000,
            securityDeposit: 15000,
            isAvailable: true,
            isTopRated: true,
            isRecommended: true,
            gender: ["male", "female"],
            images: [
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
              ],
        },
      ]
    },
    {
        images: [
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
        ],
        name: "House",
        location: "Hyderabad",
        area: "Narsingi",
        price: "45,234",
        originalPrice: "46,000",
        gender: ["male","female"],
        occupancy: ["Single", "Double", "Triple"],
        amenities: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
        isTopRated: true,
        latitude: 12.9716,
        longitude: 77.5946,
        phoneNumber: "7092482474",
        overallRating: 4.8,
        complaintResolution: 74,
        reviews: [
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
        ],
        rooms: [
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: false,
                isTopRated: false,
                isRecommended: false,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: true,
                isTopRated: true,
                isRecommended: true,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: true,
                isTopRated: true,
                isRecommended: true,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
          ]
      },
      {
        images: [
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
        ],
        name: "Amazon",
        location: "Hyderabad",
        area: "Narsingi",
        price: "40,000",
        originalPrice: "43,000",
        gender: ["male","female"],
        occupancy: ["Single", "Double", "Triple"],
        amenities: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
        isTopRated: true,
        latitude: 12.9716,
        longitude: 77.5946,
        phoneNumber: "7092482474",
        overallRating: 4.8,
        complaintResolution: 74,
        reviews: [
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
        ],
        rooms: [
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: false,
                isTopRated: false,
                isRecommended: false,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: true,
                isTopRated: true,
                isRecommended: true,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: true,
                isTopRated: true,
                isRecommended: true,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
          ]
      },
      {
        images: [
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
          "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
        ],
        name: "Canberra",
        location: "Hyderabad",
        area: "Narsingi",
        price: "42,000",
        originalPrice: "43,000",
        gender: ["male","female"],
        occupancy: ["Single", "Double", "Triple"],
        amenities: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
        isTopRated: true,
        latitude: 12.9716,
        longitude: 77.5946,
        phoneNumber: "7092482474",
        overallRating: 4.8,
        complaintResolution: 74,
        reviews: [
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
          {
              userName:"dontcatchme",
              userPic: "https://via.placeholder.com/50",
              comment: "Amazing place with friendly staff.",
              roomType: "Single Room",
              rating: 4.5,
              postedDate:"2025-02-06",
          },
        ],
        rooms: [
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: true,
                isTopRated: true,
                isRecommended: true,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: false,
                isTopRated: false,
                isRecommended: false,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
            {
                roomType: "Single",
                price: 21000,
                originalPrice: 30000,
                securityDeposit: 15000,
                isAvailable: true,
                isTopRated: true,
                isRecommended: true,
                gender: ["male", "female"],
                images: [
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/f998/60e8/a9d1bf8d61521d2250b8035cc758e89c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nnh~~5hzaIP2g6Jp9CTsKOuXB37O5WrQ4SdVrjd5A46m~Mfa0ZmSj5K2upR6oUhj7prCVublqXoRHQmO5PSGpi8e9s-OlT79dx6W9RWHNw89Hkn0julQU2HvHKJcYT-H-UkoYeHoJlWPk0w0miRe6onpHW3GxSUZluP2ySYQMCI82QI9BBg5r33ni6TXnuPV3KwKsh~6cjQeZkUe1nkJEPfCBnx7tb7NrT3URx~NcjyHsn4xbRWrVfTOYG9tJZ48eZz3uhvAJVlnbFuS7a8jRmn-Iw7Br76bIcGv0iYAOJw7uK-HtVMud4gAAttqdt8H8n7sRWEA6DcHXHvPDDICxg__",
                    "https://s3-alpha-sig.figma.com/img/5b98/76d5/ba9669313020be8e57e81048ae55a4cc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C4OeUAFrWIeENICXinJ4dt~bn3aKIbOeSceS1xycja4CC5PBuASp-XKlhWenhhlNdbFMAB5vvZ3G1eg7KfXdGvS0HcKSKtyg08swrzePyyR3Gy3ouOphlN1M6dS2rgn6RcVkJTIXp-8s4qzUQVR~yTXIyQrz828z4sNlSIzakGvf73lBmZB3fmAsnc~CDZTce7KOlfT-ilKH~McKejvGNOCgyVSaJ1L3XLFDrNbLesHbq2vI0HpNfuTrZSZq~MJq2IoC0XVLRb8RzZvduDgzPEJnmZpqOdITvCwrxGF~7zooAWZ4xBas3NfDDV~YLed6kOb68fq0-rCLLnW5Kcv7Cg__",
                  ],
            },
          ]
      },
    
  ]);
   // useEffect(() => {
    //   // Fetch properties from API
    //   fetch('https://api.example.com/properties')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setAllProperties(data);
    //     })
    //     .catch((error) => console.error('Error fetching properties:', error));
    // }, []);
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [phoneNumber,setPhoneNumber] =useState('');
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  
  const openOTPModal = (number) => {
    setPhoneNumber(number);
    setIsLoginModalOpen(false);
    setIsOTPModalOpen(true);
  };

  const closeModal = () => {
    setIsOTPModalOpen(false);
    setIsLoginModalOpen(false);
  };

  const openLoginModal = () =>{
    setIsOTPModalOpen(false);
    setIsLoginModalOpen(true);
  }

  const navbarRef = useRef(null);
  const citySearchRef=useRef(null);
  const [navbarHeight,setNavbarHeight] = useState(0);

  useEffect(()=>{
    const updateNavbarHeight = () => {
      if(navbarRef.current){
        console.log("Navbar height:", navbarRef.current.offsetHeight);
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize',updateNavbarHeight);
    return () =>{
      window.removeEventListener('resize',updateNavbarHeight);
    };
  },[]);

  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
    <div className='App'>
      <Navbar ref={navbarRef} openLoginModal={openLoginModal} setSelectedLocation={setSelectedLocation} citySearchRef={citySearchRef}/>
      {isLoginModalOpen && (
        <LoginModal
          closeModal={closeModal}
          openOTPModal={openOTPModal}
        />
      )}
      {isOTPModalOpen && (
        <OTPModal phoneNumber={phoneNumber} closeModal={closeModal} openLoginModal={openLoginModal} />
      )}
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection  
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation} 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              navbarHeight={navbarHeight}
              citySearchRef={citySearchRef}
            />
            { selectedLocation && (
              <CitySearch
                selectedLocation={selectedLocation}
                searchQuery={searchQuery}
                allProperties={allProperties}/>
            )}
            <AvailableIn/>
            <RecentlyAdded
              properties={allProperties}/>
            <Content/>
            <Experience/>
            <Search/>
          </>
        }/>
        <Route 
          path='property/:name' 
          element={
            <PropertyDetails
              navbarHeight={navbarHeight}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App;
