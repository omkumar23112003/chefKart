import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const ChefDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    const fetchChef = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/chef/get`);
        const found = res.data.data.find((c) => c._id === id);
        setChef(found);
      } catch (err) {
        console.error("Failed to fetch chef details", err);
      }
    };

    fetchChef();
  }, [id]);

  if (!chef) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 mt-16 max-w-5xl mx-auto bg-white shadow rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={chef.profilepic || "https://via.placeholder.com/100"}
          alt={chef.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{chef.name}</h2>
          <p className="text-sm text-gray-600">
            {chef.city}, {chef.area} - {chef.locality}
          </p>
          <p className="text-sm">
            <span className="font-medium">⭐ {chef.starRating || "0"}</span> (
            {chef.totalRatings || "0"} Ratings)
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-1">About cook</h3>
        <p className="text-gray-700">{chef.about || "No description provided."}</p>
      </div>

      {/* Cuisine Ratings */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Cuisine Ratings</h3>
        <div className="flex gap-4">
          {chef.cuisines?.map((cuisine, index) => (
            <div
              key={index}
              className="border rounded p-3 flex items-center gap-2 bg-gray-50 shadow-sm"
            >
              <span className="font-semibold">{cuisine.name}</span>
              <span className="text-yellow-500">⭐ {cuisine.rating}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Availability Info */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Available to work in</h3>
        <div className="flex items-center text-sm text-blue-600 gap-2">
          <FaMapMarkerAlt />
          <span>{chef.address || `${chef.city}, ${chef.area}`}</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-2">Available at</h3>
        <div className="flex gap-4 text-sm">
          {chef.timings?.map((slot, i) => (
            <div
              key={i}
              className="bg-gray-100 px-4 py-2 rounded flex items-center gap-2"
            >
              <MdAccessTime />
              {slot}
            </div>
          ))}
        </div>
      </div>

      {/* Extra Info */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <p>
          <strong>Experience:</strong> {chef.experience || "N/A"} years
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <span className="text-blue-700">{chef.phone}</span>
        </p>
        <p>
          <strong>Houses served:</strong> {chef.housesServed || "0"}
        </p>
        <p>
          <strong>Food Types:</strong> {chef.veg && "Veg"} {chef.nonVeg && " / Non-Veg"}
        </p>
      </div>
    </div>
  );
};

export default ChefDetails;
// 