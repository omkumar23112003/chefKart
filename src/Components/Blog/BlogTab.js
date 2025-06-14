import React, { useEffect, useState } from "react";
import axios from "axios";

const TabSwitch = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blog/getAll");
        const blogData = response.data;
        setData(blogData);
        if (blogData.length > 0) {
          setActiveTab(blogData[0].category);
        }
      } catch (err) {
        setError("Failed to fetch blog data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const fetchBlogDetails = async (id) => {
    setModalLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/blog/get/${id}`);
      setSelectedBlog(response.data);
      setModalOpen(true);
    } catch (err) {
      console.error("Failed to fetch blog details", err);
    } finally {
      setModalLoading(false);
    }
  };
// filter the data based on the active tab
  const categories = [...new Set(data.map((item) => item.category))];
  const filteredData = data.filter((item) => item.category === activeTab);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mt-5 mb-6 justify-center items-center flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === category
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div
            key={item._id}
            onClick={() => fetchBlogDetails(item._id)}
            className="cursor-pointer bg-white shadow-md mt-10 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">
                {item.content?.slice(0, 100)}...
              </p>
              <p className="text-lg font-bold text-blue-600">{item.category}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>{new Date(item.updatedAt).toLocaleDateString()}</span>
                <span>~ 3 min</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-auto max-h-[80vh] p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            {modalLoading ? (
              <div className="text-center">Loading details...</div>
            ) : (
              <>
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-60 object-cover rounded"
                />
                <h2 className="text-2xl font-bold mt-4">{selectedBlog.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(selectedBlog.updatedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-800 mt-4">{selectedBlog.content}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabSwitch;
