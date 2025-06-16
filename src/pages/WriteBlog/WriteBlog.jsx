import { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // or wherever you store JWT

      const response = await axios.post(
        "http://localhost:5000/api/blogs",
        {
          title,
          author,
          image,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Blog created successfully!");
      setTitle("");
      setAuthor("");
      setImage("");
      setContent("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Write a Blog</h2>

      {message && (
        <div className="mb-4 text-sm text-red-500 font-semibold">{message}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Author</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Content</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="bg-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;
