import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ChefDirectory = () => {
  //handle the api calls and data fetching for the chef directory
  //useState to manage the state of chefs and search filters
  const [chefs, setChefs] = useState([]);

  //search  filter of chef
  const [search, setSearch] = useState("");
  //useNavigate is used to navigate to different routes
   const navigate = useNavigate();

  const [filters, setFilters] = useState({
    city: "",
    area: "",
    locality: "",
  });

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/chef/get");
        if (response.data && response.data.data) {

          setChefs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };

    fetchChefs();
  }, []);
// filter the chefs based on the search input and selected filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  
  const filteredChefs = chefs.filter((chef) => {
    const matchesGlobalSearch =
      chef.name.toLowerCase().includes(search.toLowerCase()) ||
      chef.phone.includes(search);
    const matchesCity =
      filters.city === "" ||
      chef.city?.toLowerCase().includes(filters.city.toLowerCase());
    const matchesArea =
      filters.area === "" ||
      chef.area?.toLowerCase().includes(filters.area.toLowerCase());
    const matchesLocality =
      filters.locality === "" ||
      chef.Address?.toLowerCase().includes(filters.locality.toLowerCase());

    return matchesGlobalSearch && matchesCity && matchesArea && matchesLocality;
  });

  return (
    <div className="p-4 bg-gray-100 min-h-screen mt-16">
      {/* Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Global Search..."
          className="p-2 border rounded shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="Search by City"
          className="p-2 border rounded shadow-sm"
          value={filters.city}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="area"
          placeholder="Search by Area"
          className="p-2 border rounded shadow-sm"
          value={filters.area}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="locality"
          placeholder="Search by Locality"
          className="p-2 border rounded shadow-sm"
          value={filters.locality}
          onChange={handleFilterChange}
        />
      </div>

      {/* Chefs List */}
      <h1 className="text-xl font-bold mb-4">Trending cooks</h1>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChefs.map((chef, index) => (
          <div
            key={index}
            onClick={() => navigate(`/chef/${chef._id}`)}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={chef.profilepic || "https://via.placeholder.com/64"}
                alt={chef.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{chef.name}</h3>
                <p className="text-sm text-gray-500">
                  {chef.city}, {chef.area}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                ⭐ {chef.starRating || "0"} ({chef.totalRatings || "0"} Ratings)
              </p>
              <p className="text-sm">📞 {chef.phone}</p>
              <p className="text-sm">
                Experience: {chef.experience || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDirectory;
