import { useState } from "react";
import ShareDropdown from "../ShareDropdown/ShareDropdown";
import { Link } from "react-router-dom";

const BlogThumbnail = ({ blogPost }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { blogId, blogImg, blogImgTitle, blogTitle, blogContent } = blogPost;
  return (
    <div className="group md:h-72">
      <div className="bg-[#cecdcd] relative">
        <div className="absolute top-5 right-5">
          {/* Use ShareDropdown component */}
          <ShareDropdown
            showShareMenu={showShareMenu}
            toggleMenu={() => setShowShareMenu(!showShareMenu)}
          />
        </div>
        <Link to={`/blogs/${blogId}`}>
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            {/* image part */}
            <div>
              <img
                className="object-cover h-72 w-full"
                src={blogImg}
                alt={blogImgTitle}
              />
            </div>
            {/* content part */}
            <div className="px-16 my-12 space-y-2">
              <h1 className="text-3xl font-bold group-hover:text-[#862e2e] text-[#000000b0]">
                {blogTitle}
              </h1>
              <p className="line-clamp-3 text-sm font-medium text-[#0000009a] group-hover:text-[#862e2eac]">
                {blogContent}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogThumbnail;
