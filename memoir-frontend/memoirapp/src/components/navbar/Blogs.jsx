import React from 'react'
import EditorNew from './NewEditor';
import Footer from '../common/Footer';
import BlogList from '../contents/BlogContents';
import CustomCodeEditor from '../contents/CustomCodeEditor';

const Blogs = () => {
  return (
    <div>
       <div className='bg-teal-100'>
       <EditorNew/>
       <BlogList/>
       <CustomCodeEditor/>
       <Footer/>
       </div>
    </div>
  )
}

export default Blogs;
