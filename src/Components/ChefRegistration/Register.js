import React, { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

const ChefFormFormik = () => {
  const [loading, setLoading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "marketdata");
    const response = await axios.post("https://api.cloudinary.com/v1_1/de4ks8mkh/image/upload", formData);
    return response.data.secure_url;
  };

  const chefSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    Address: Yup.string().required("Address is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),
  });

  const initialValues = {
    name: "",
    Address: "",
    profilepic: "",
    default_cook_image: "",
    city: "",
    state: "",
    area: "",
    country: "",
    pincode: "",
    email: "",
    phone: "",
    experience: "",
    verified: false,
    starRating: 0,
    totalRatings: 0,
    language: [],
    veg: false,
    nonVeg: false,
    aboutCook: "",
    cuisineRatings: { Indian: 0, Continental: 0 },
    availableLocations: [],
    availability: [{ day: "", time: "" }],
    housesServed: 0,
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (!values.profilepic || !values.default_cook_image) {
        toast.error("Please upload both profile and cook images");
        return;
      }

      setLoading(true);
      console.log("Submitting values:", values); // Debug log
      await axios.post("http://localhost:8000/chef/create", values);
      toast.success("Chef has registered successfully!");
      resetForm();
    } catch (error) {
      toast.error("Registration failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg mt-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
        👨‍🍳 Register a Chef
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={chefSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["name", "Name"],
              ["Address", "Address"],
              ["email", "Email"],
              ["phone", "Phone"],
              ["experience", "Experience"],
              ["city", "City"],
              ["state", "State"],
              ["area", "Area"],
              ["country", "Country"],
              ["pincode", "Pincode"],
              ["starRating", "Star Rating"],
              ["totalRatings", "Total Ratings"],
              ["housesServed", "Houses Served"],
            ].map(([name, placeholder]) => (
              <div key={name}>
                <Field name={name} placeholder={placeholder} className={inputClass} />
                <ErrorMessage name={name} component="div" className="text-sm text-red-600 mt-1" />
              </div>
            ))}

            {/* Profile Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">Profile Pic</label>
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const url = await uploadToCloudinary(e.target.files[0]);
                  setFieldValue("profilepic", url);
                }}
              />
              {values.profilepic && (
                <img
                  src={values.profilepic}
                  alt="profile"
                  className="mt-2 w-20 h-20 rounded-full object-cover"
                />
              )}
            </div>

            {/* Cook Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">Default Cook Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const url = await uploadToCloudinary(e.target.files[0]);
                  setFieldValue("default_cook_image", url);
                }}
              />
              {values.default_cook_image && (
                <img
                  src={values.default_cook_image}
                  alt="default cook"
                  className="mt-2 w-20 h-20 rounded-lg object-cover"
                />
              )}
            </div>

            {/* Checkboxes */}
            <div className="col-span-1 sm:col-span-2 flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2">
                <Field type="checkbox" name="veg" /> Veg
              </label>
              <label className="flex items-center gap-2">
                <Field type="checkbox" name="nonVeg" /> Non-Veg
              </label>
              <label className="flex items-center gap-2">
                <Field type="checkbox" name="verified" /> Verified
              </label>
            </div>

            {/* About Cook */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block mb-1 font-medium">About Cook</label>
              <Field
                as="textarea"
                name="aboutCook"
                rows={4}
                placeholder="Write something about the cook..."
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Cuisine Ratings */}
            <Field
              name="cuisineRatings.Indian"
              type="number"
              placeholder="Indian Cuisine Rating"
              className={inputClass}
            />
            <Field
              name="cuisineRatings.Continental"
              type="number"
              placeholder="Continental Cuisine Rating"
              className={inputClass}
            />

            {/* Comma-Separated Fields */}
            <Field
              name="language"
              placeholder="Languages (comma separated)"
              className={inputClass}
              onChange={(e) =>
                setFieldValue(
                  "language",
                  e.target.value.split(",").map((item) => item.trim())
                )
              }
            />
            <Field
              name="availableLocations"
              placeholder="Available Locations (comma separated)"
              className={inputClass}
              onChange={(e) =>
                setFieldValue(
                  "availableLocations",
                  e.target.value.split(",").map((item) => item.trim())
                )
              }
            />

            {/* Availability FieldArray */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block font-semibold text-gray-700 mb-2">Availability</label>
              <FieldArray name="availability">
                {({ push, remove }) => (
                  <div className="space-y-2">
                    {values.availability.map((slot, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-center gap-2">
                        <Field
                          name={`availability[${index}].day`}
                          placeholder="Day"
                          className={`${inputClass} sm:w-1/2`}
                        />
                        <Field
                          name={`availability[${index}].time`}
                          placeholder="Time"
                          className={`${inputClass} sm:w-1/2`}
                        />
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-600 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ day: "", time: "" })}
                      className="text-blue-500 hover:underline mt-1"
                    >
                      + Add Slot
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="col-span-1 sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg font-semibold transition-all"
            >
              {loading ? "Submitting..." : "Register Chef"}
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default ChefFormFormik;
