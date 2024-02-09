import React from 'react'
import EditorNew from './NewEditor';
import Footer from '../common/Footer';
import BlogList from '../contents/BlogContents';

const Blogs = () => {
  return (
    <div>
       <div>
       <EditorNew/>
       <BlogList/>
       <Footer/>
       </div>
    </div>
  )
}

export default Blogs;
