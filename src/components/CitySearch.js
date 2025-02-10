import React,{useState, useEffect, useRef} from "react";
import ReactSlider from 'react-slider';
import PropertyCard from "./PropertyCard";
import "./../styles/CitySearch.css";
import MapComponent from "./Map";

const CitySearch = React.forwardRef(({ selectedLocation, searchQuery, allProperties }) => {

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

    const previousFilters = useRef(filters);

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

        if(JSON.stringify(filtered)!==JSON.stringify(filteredProperties)){
            setFilteredProperties(filtered);
            setCurrentPage(1);
        }

        // setFilteredProperties(filtered);
        // setCurrentPage(1); // Reset pagination
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
        else setCurrentPage(totalPages);
    };
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        else setCurrentPage(1);
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
        setShowSortModal(false);
        setShowFilters(!showFilters);
    };
    const toggleSortModal = () => {
        setShowFilters(false);
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
      }, [allProperties, selectedLocation, searchQuery, JSON.stringify(filters)]);

    useEffect(() => {
        if(sortOption){
            sortProperties(sortOption);
        }
    }, [sortOption]);

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
                        <h3>
                            {`Found ${filteredProperties.length} listings ${selectedLocation ? `in ${selectedLocation}` : ''}${searchQuery ? ` matching "${searchQuery}"`: ''}`}
                        </h3>
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
                        filteredProperties.map((property, index) => (
                        <PropertyCard key={index} property={property} />
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
                <MapComponent properties={filteredProperties}/>
                )}
            </div>
        </div>
    );
});
    
export default CitySearch;