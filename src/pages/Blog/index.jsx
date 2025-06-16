import React from "react";
import PageTitle from "../../section/PageTitle";
import BlogsContainer from "../../section/BlogsContainer";
import { blogItems } from "../../data/data";

const Blog = () => {
  return (
    <div>
      <PageTitle title={"Blog"} />
      <BlogsContainer blogs={blogItems} />
    </div>
  );
};

export default Blog;
