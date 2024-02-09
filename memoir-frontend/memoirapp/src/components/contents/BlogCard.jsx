// BlogCard.js

import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <span className="text-sm text-gray-500">Published on {blog.timestamp.toLocaleDateString()}</span>
    </div>
  );
};

export default BlogCard;
