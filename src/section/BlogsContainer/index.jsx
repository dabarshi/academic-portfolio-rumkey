import React, { useState } from "react";
import BlogThumbnail from "../../component/BlogThumbnail/BlogThumbnail";
import { Link } from "react-router-dom";
import SearchBar from "../../component/SearchBar/SearchBar"; // Import SearchBar

const BlogsContainer = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    `${blog.blogTitle} ${blog.blogSubTitle} ${blog.blogContent} ${blog.others}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-10 max-w-6xl mx-auto px-4">
      <div>
        <div className="flex justify-between items-center my-12 relative">
          <Link to="/blogs">
            <p className="text-[#000000c9] hover:text-[#862e2e]">ALL Posts</p>
          </Link>

          {/* Use the SearchBar Component */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <div className="space-y-10">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div>
                <BlogThumbnail key={blog.blogId} blogPost={blog} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsContainer;
