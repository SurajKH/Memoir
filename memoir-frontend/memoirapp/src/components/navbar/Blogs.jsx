import React from 'react'
import NewEditor from './NewEditor';
import Footer from '../common/Footer';
import BlogList from '../contents/BlogContents';
import ResponsiveCard from '../contents/ResponsiveCard';
// import CustomCodeEditor from '../contents/CustomCodeEditor';

const Blogs = () => {
  return (
    <div>
       <div>
       <NewEditor/>
       {/* <BlogList/> */}
       {/* <CustomCodeEditor/> */}
       <ResponsiveCard/>
       <Footer/>
       </div>
    </div>
  )
}

export default Blogs;
