const BlogPostMeta = ({ metaData }) => {
  const metaData = { authorImg, authorName, createdAt, readTime };
  return (
    <div>
      <div>
        <div>
          <img src={authorImg} alt={authorName} />
        </div>
        <div>
          <p>{authorName}</p>
          <div>
            <p>{createdAt}</p>
            <p>{readTime}</p>
          </div>
        </div>
      </div>
      <p>:</p>
    </div>
  );
};

export default BlogPostMeta;
