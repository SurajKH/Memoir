import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard'; //Import your BlogCard component
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import DOMPurify from 'dompurify';
import ResponsiveCard from '../contents/ResponsiveCard';

const SanitizedHTML = ({ htmlContent }) => {
    const sanitizedContent = DOMPurify.sanitize(htmlContent);
  
    return <div className='border border-slate-950 p-4' dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
  };

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchDataFromFirestore = async () => {
    const firestore = getFirestore();
    const blogsRef = collection(firestore, 'blogs');
    const snapshot = await getDocs(blogsRef);
  
    const blogsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      content: doc.data().content,
      timestamp: doc.data().timestamp.toDate(),
    }));
  
    return blogsData;
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromFirestore();
      console.log("Data: ",data);
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
      {blogs.map((blog) => (
        <div className='bg-gray-800 text-white'>
        {/* <div>
            {blog['content']}
        </div> */}
        {/* <BlogCard key={blog.id} blog={blog} /> */}
        <SanitizedHTML htmlContent={blog['content']} />
        </div>
       
      ))}
    </div>
    <div>
    <ResponsiveCard/>
    </div>
    </>
  );
};

export default BlogList;
