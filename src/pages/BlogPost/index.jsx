import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogItems } from "../../data/data";
import ShareDropdown from "../../component/ShareDropdown/ShareDropdown";
import SearchBar from "../../component/SearchBar/SearchBar";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const blogId = parseInt(id); // make sure it's a number
    const found = blogItems.find((item) => item.blogId === blogId);
    setBlog(found);
  }, [id]);

  if (!blog) {
    return <p className="text-center mt-20 text-gray-500">Blog not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center my-12 relative">
        <Link to="/blogs">
          <p className="text-[#000000c9] hover:text-[#862e2e]">ALL Posts</p>
        </Link>

        {/* Use the SearchBar Component */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="px-4 md:px-20 py-10 md:py-16 border">
        <div className="flex items-center gap-3 mb-12">
          <img
            src={blog.authorImg}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex justify-between items-center w-full">
            <p className="text-sm font-semibold text-[#3e3e47]">
              {blog.authorName} • {blog.createdAt} • {blog.readTime}
            </p>
            <div>
              <ShareDropdown
                showShareMenu={showShareMenu}
                toggleMenu={() => setShowShareMenu(!showShareMenu)}
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2 text-[#393737]">
          {blog.blogTitle}
        </h1>
        <h2 className="text-lg text-[#5a5454] mb-12">{blog.blogSubTitle}</h2>

        <img
          src={blog.blogImg}
          alt={blog.blogTitle}
          className="w-full max-h-[800px] rounded-lg mb-8"
        />

        <p className="text-lg leading-8 text-gray-800 whitespace-pre-line">
          {blog.blogContent}
        </p>

        <div className="mt-8 text-sm text-gray-500 italic">
          Tags: {blog.others}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
