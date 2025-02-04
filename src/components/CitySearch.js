import React,{useState, useEffect} from "react";
import ReactSlider from 'react-slider';
import PropertyCard from "./PropertyCard";
import "./../styles/CitySearch.css";

const CitySearch = ({selectedLocation, searchQuery}) => {
    const allProperties = [
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
          gender: ["male","female"],
          amenities: ["Washing Machine","AC", "Attached Washroom", "Storage Shelf", "Parking"],
          isTopRated: true,
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
            gender: ["male","female"],
            amenities: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
            isTopRated: true,
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
            gender: ["male","female"],
            amenities: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
            isTopRated: true,
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
            gender: ["male","female"],
            amenities: ["AC", "Attached Washroom", "Storage Shelf", "Parking"],
            isTopRated: true,
          },
        
      ];
    // useEffect(() => {
  //   // Fetch properties from API
  //   fetch('https://api.example.com/properties')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllProperties(data);
  //     })
  //     .catch((error) => console.error('Error fetching properties:', error));
  // }, []);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 5;
    const totalPages = Math.ceil(filteredProperties.length/propertiesPerPage);

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        minPrice: 5000,
        maxPrice: 50000,
        gender: [],
        occupancy: [],
        amenities: [],
    });

    const [showSortModal, setShowSortModal] = useState(false); // For toggling the sort modal
    const [sortOption, setSortOption] = useState('');

    const applyFilters = () => {
        let filtered = allProperties;
    
        // Filter by selected location
        if (selectedLocation) {
            filtered = filtered.filter(property => property.location === selectedLocation);
        }
    
        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(
                property =>
                    property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    property.area.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
    
        // Apply price filter
        if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
            filtered = filtered.filter(
                property => parseFloat(property.price.replace(/,/g, '')) >= filters.minPrice &&
                            parseFloat(property.price.replace(/,/g, '')) <= filters.maxPrice
            );
        }
    
        // Apply gender filter
        if (filters.gender.length > 0) {
            filtered = filtered.filter(property => 
                filters.gender.some(gender => property.gender.includes(gender))
            );
        }
    
        // Apply occupancy filter
        if (filters.occupancy.length > 0) {
            filtered = filtered.filter(property =>
                filters.occupancy.includes(property.occupancy)
            );
        }
    
        // Apply amenities filter
        if (filters.amenities.length > 0) {
            filtered = filtered.filter(property =>
                filters.amenities.every(amenity => property.amenities.includes(amenity))
            );
        }

        setFilteredProperties(filtered);
        setCurrentPage(1); // Reset pagination
        if(sortOption){
            sortProperties(sortOption);
        }
    };

    const sortProperties = (sortOption) => {
        setFilteredProperties((prevProperties) => {
            let sortedProperties = [...prevProperties];

            switch (sortOption) {
                case 'Price (Low to High)':
                    sortedProperties.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
                    break;
                case 'Price (High to Low)':
                    sortedProperties.sort((a, b) => parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, '')));
                    break;
                case 'Name (A to Z)':
                    sortedProperties.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'Name (Z to A)':
                    sortedProperties.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                default:
                    break;
            }

            return sortedProperties;
        });
    };
    
    const handleApplyFilters = () => {
        setFilters(pendingFilters); // Sync pending filters to applied filters
        setShowFilters(false); // Close the filter modal
        setCurrentPage(1); // Reset pagination
      };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
    };
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
    };
    
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSliderChange = (values) => {
        const [minPrice, maxPrice] = values;
        setPendingFilters({
          ...filters,
          minPrice: minPrice||0,
          maxPrice: maxPrice||50000,
        });
    };
    
    const toggleFilters = () => {
        if(setShowSortModal) setShowSortModal(false);
        setShowFilters(!showFilters);
    };
    const toggleSortModal = () => {
        if(setShowFilters) setShowFilters(false);
        setShowSortModal((prev) => !prev);
    };
    

    const handleResetFilters = () => {
        setPendingFilters({
            minPrice: 5000,
            maxPrice: 50000,
            gender: [],
            occupancy: [],
            amenities: [],
        })
        setFilters({
            minPrice: 5000,
            maxPrice: 50000,
            gender: [],
            occupancy: [],
            amenities: [],
        });
        setCurrentPage(1);
    };

    useEffect(() => {
        applyFilters();
      }, [selectedLocation]);
      useEffect(() => {
        applyFilters();
      }, [allProperties, selectedLocation, searchQuery]);

    useEffect(() => {
        if(sortOption){
            sortProperties(sortOption);
        }
    }, [filteredProperties]);

    const [pendingFilters, setPendingFilters] = useState(filters);

    const handlePendingFilterChange = (category, value) => {
        setPendingFilters((prevFilters) => ({
          ...prevFilters,
          [category]: prevFilters[category].includes(value)
            ? prevFilters[category].filter((item) => item !== value)
            : [...prevFilters[category], value],
        }));
      };
    
      const getSelectedFilterCount = () => {
        let count = 0;
        if (pendingFilters.minPrice !== 5000 || pendingFilters.maxPrice !== 50000) {
            count += 1;
        }
        for (const key of ['gender', 'occupancy', 'amenities']) {
            count += pendingFilters[key].length;
        }
        return count;
    };

    const handleSortSelection = (option) => {
        setSortOption(option); // Set the selected sorting option
        sortProperties(option); // Apply sorting
        setShowSortModal(false); // Close modal after selection
    };
    

   
    

      
    
    return (
        <div className="city-search">
            <div className="city-search-left">
                    <div className="info">
                        <h3>{`Found ${filteredProperties.length} listings in ${selectedLocation}`}</h3>
                            <div className="sort-filter-buttons">
                                <button 
                                    className={`sort-btn ${showSortModal ? "active" : ""}`}
                                    onClick={toggleSortModal}>
                                    <i className="fas fa-sort"></i> 
                                    Sort By
                                    <i className="fas fa-caret-down dropdown-icon"></i>
                                </button>
                                <button 
                                    className={`filter-btn ${showFilters ? "active" : ""}`}
                                    onClick={toggleFilters}>
                                    <i className="fas fa-filter"></i> 
                                    Filter
                                    <i className="fas fa-caret-down dropdown-icon"></i>
                                </button>
                            </div>
                    </div>
                <div className="property-list">
                {showFilters && (
                    <div className="filter-modal">
                        <h4>Filter Properties</h4>
                        
                        {/* Price Range */}
                        <div className="price-slider-container">
                            <label>Price Range</label>
                            <ReactSlider
                                className="price-slider"
                                min={1000}
                                max={50000}
                                step={1000}
                                value={[pendingFilters.minPrice,pendingFilters.maxPrice]}
                                onChange={handleSliderChange}
                                pearling
                                minDistance={1000}
                                renderTrack={(props,state) => {
                                    const trackColor = state.index === 1 ? 'blue' : 'grey';
                                    return <div {...props} className={`slider-track ${trackColor}`}/>;
                                }}
                                renderThumb={(props) => <div {...props} className="slider-thumb"/>}
                                renderRail={(props) => <div {...props} className="slider-rail" />}
                            />
                            <div className="price-display">
                                <div className="price-box">₹{pendingFilters.minPrice}</div>
                                <span>to</span>
                                <div className="price-box">₹{pendingFilters.maxPrice}</div>
                            </div>
                        </div>
                        
                        {/* Gender (Multi-select) */}
                        <div className="filter-section">
                            <h5>Gender:</h5>
                            {["Male", "Female", "Both"].map((gender) => (
                                <button
                                    key={gender}
                                    className={`filter-section-btn ${pendingFilters.gender.includes(gender) ? "selected" : ""}`}
                                    onClick={() => handlePendingFilterChange("gender", gender)}
                                >
                                    {gender}
                                </button>
                            ))}
                        </div>

                        {/* Occupancy (Multi-select) */}
                        <div className="filter-section">
                            <h5>Occupancy:</h5>
                            {["Single", "Double", "Triple", "Quadruple", "Quintuple", ">5"].map((occupancy) => (
                                <button
                                    key={occupancy}
                                    className={`filter-section-btn ${pendingFilters.occupancy.includes(occupancy) ? "selected" : ""}`}
                                    onClick={() => handlePendingFilterChange("occupancy", occupancy)}
                                >
                                    {occupancy}
                                </button>
                            ))}
                        </div>

                        {/* Amenities (Multi-select) */}
                        <div className="filter-section">
                            <h5>Amenities:</h5>
                            {["Attached Bathroom", "AC", "Attached Balcony", "Storage Shelf", "Desert Cooler", "Kitchen", "Meal Subscription", "High Speed WiFi", "Laundry", "Power Backup", "Housekeeping", "Gym", "Washing Machine", "Hot Water", "Television", "Water Purifier", "24x7 Surveillance"].map((amenity) => (
                                <button
                                    key={amenity}
                                    className={`filter-section-btn ${pendingFilters.amenities.includes(amenity) ? "selected" : ""}`}
                                    onClick={() => handlePendingFilterChange("amenities", amenity)}
                                >
                                    {amenity}
                                </button>
                            ))}
                        </div>
                        <div className="filter-actions">
                        <button className="reset-btn" onClick={handleResetFilters}>Reset</button>
                            <button className="apply-btn" onClick={handleApplyFilters} disabled={getSelectedFilterCount() === 0}>
                                Apply {getSelectedFilterCount()} Filter{getSelectedFilterCount() !== 1 ? 's' : ''}
                            </button>
                        </div>
                    </div>
                )}

                {showSortModal && (
                    <div className="sort-modal">
                        <h4>Sort Properties</h4>
                        <div className="sort-options">
                            {["Price (Low to High)", "Price (High to Low)", "Name (A to Z)", "Name (Z to A)"].map((option) => (
                            <button
                                key={option}
                                className={`sort-option-btn ${sortOption === option ? "selected" : ""}`}
                                onClick={() => {
                                    handleSortSelection(option);
                                }}
                            >
                                {option}
                            </button>
                            ))}
                        </div>
                    </div>
                )}

                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
                
                {filteredProperties.length>0 && (
                    <div className="pagination">
                        <button
                            className="prev-btn"
                            onClick={handlePrevPage}
                            disabled={currentPage===1}
                        >
                            Prev
                        </button>
                        {[...Array(totalPages).keys()].map((number) => (
                            <button
                                key={number}
                                className={`page-btn ${currentPage === number + 1 ? 'active' : ''}`}
                                onClick={() => handlePageClick(number+1)}
                            >
                                {number+1}
                            </button>
                        ))}
                        <button
                            className="next-btn"
                            onClick={handleNextPage}
                            disabled={currentPage===totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            <div className="city-search-right">
                {filteredProperties.length>0 && (
                <div className="map">Map goes here</div>
                )}
            </div>
        </div>
    );
};
    
export default CitySearch;